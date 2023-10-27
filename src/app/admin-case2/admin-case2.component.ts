import { Component,} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router';
import { AdminCase2Service } from './admin-case2-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-case2',
  templateUrl: './admin-case2.component.html',
  styleUrls: ['./admin-case2.component.css']
})
export class AdminCase2Component {
  outdated_engine: any;
  title = "Admin: Target and Indicators";

  header: string = "";
  header_desc: string = "";
  header_title: string = "";
  case1: string [] = [];
  case2: string [] = [];
  case3: string [] = [];
  case4: string [] = [];
  indicator_1: string [] = [];
  indicator_2: string [] = [];
  indicator_3: string [] = [];
  indicator_4: string [] = [];
  indicator_5: string [] = [];
  references: string [] = [];

  isThereAnyChanges: boolean = false;

  constructor(private http: HttpClient, 
    private titleService: Title,
    private AdminCase2Service: AdminCase2Service,
    private router: Router,
    private toastr: ToastrService){}

  // Main Methods and functions here
  indicatorPusher(bullet: string[], bulletNumber: string, items: integer){
    for(let i = 0; i < items; i++){
      const propertyName = `indicator_${bulletNumber}`;
      bullet.push(this.outdated_engine[0][propertyName][i]);
    }
  }

  casePusher(caseArray: string[], caseNumber: string){
    for(let i = 0; i < 1; i++){
      const propertyName = `case${caseNumber}`;
      caseArray.push(this.outdated_engine[0].cases[propertyName][i]);
    }
  }

  referencePusher(refArray: string[]){
    for(let i = 0; i < 1; i++){
      refArray.push(this.outdated_engine[0].references[i]);
    }
  }

  getData(): void{
    this.AdminCase2Service.getData().subscribe(incoming_data =>{
      this.outdated_engine = incoming_data;

      this.header = this.outdated_engine[0].header;
      this.header_desc = this.outdated_engine[0].header_description;
      this.header_title = this.outdated_engine[0].title;

      // Cases
      this.casePusher(this.case1, "1");
      this.casePusher(this.case2, "2");
      this.casePusher(this.case3, "3");
      this.casePusher(this.case4, "4");

      // Indicators
      this.indicatorPusher(this.indicator_1, "1", 6);
      this.indicatorPusher(this.indicator_2, "2", 5);
      this.indicatorPusher(this.indicator_3, "3", 4);
      this.indicatorPusher(this.indicator_4, "4", 4);
      this.indicatorPusher(this.indicator_5, "5", 4);

      // References
      this.referencePusher(this.references);
    })
  }

  updateData(): void {
    if (this.isAnyChanges()) {
    // Validate input fields
    if (
      !this.isValidInput(this.header) ||
      !this.isValidInput(this.header_desc) ||
      !this.isValidInput(this.header_title) ||
      !this.isValidInput(this.case1[0]) ||
      !this.isValidInput(this.case2[0]) ||
      !this.isValidInput(this.case3[0]) ||
      !this.isValidInput(this.case4[0]) ||
      this.indicator_1.some(indicator => !this.isValidInput(indicator)) ||
      this.indicator_2.some(indicator => !this.isValidInput(indicator)) ||
      this.indicator_3.some(indicator => !this.isValidInput(indicator)) ||
      this.indicator_4.some(indicator => !this.isValidInput(indicator)) ||
      this.indicator_5.some(indicator => !this.isValidInput(indicator)) ||
      this.references.some(reference => !this.isValidInput(reference))
    ) {
      // Validation failed, do not proceed with the update
      this.toastr.error('Please fill in all input fields before updating.', 'Validation Error');
      return;
    }

      // Sanitize input before sending
      const sanitizedHeader = this.sanitizeInput(this.header);
      const sanitizedHeaderDesc = this.sanitizeInput(this.header_desc);
      const sanitizedHeaderTitle = this.sanitizeInput(this.header_title);
  
      // Sanitize case data
      const sanitizedCase1 = this.sanitizeInput(this.case1[0]);
      const sanitizedCase2 = this.sanitizeInput(this.case2[0]);
      const sanitizedCase3 = this.sanitizeInput(this.case3[0]);
      const sanitizedCase4 = this.sanitizeInput(this.case4[0]);

     // Sanitize indicators
     const sanitizedIndicators1 = this.sanitizeIndicator(this.indicator_1);
     const sanitizedIndicators2 = this.sanitizeIndicator(this.indicator_2);
     const sanitizedIndicators3 = this.sanitizeIndicator(this.indicator_3);
     const sanitizedIndicators4 = this.sanitizeIndicator(this.indicator_4);
     const sanitizedIndicators5 = this.sanitizeIndicator(this.indicator_5);

     // Sanitize references
     const sanitizedReferences = this.sanitizeReferences(this.references);

  
  
      // Check if any of the inputs failed validation
      if (
        sanitizedHeader === null ||
        sanitizedHeaderDesc === null ||
        sanitizedHeaderTitle === null ||
        sanitizedCase1 === null ||
        sanitizedCase2 === null ||
        sanitizedCase3 === null ||
        sanitizedCase4 === null ||
        sanitizedIndicators1.some((indicator) => indicator === '') ||
        sanitizedIndicators2.some((indicator) => indicator === '') ||
        sanitizedIndicators3.some((indicator) => indicator === '') ||
        sanitizedIndicators4.some((indicator) => indicator === '') ||
        sanitizedIndicators5.some((indicator) => indicator === '') ||
        sanitizedReferences.some((reference) => reference === '')

      ) {
        // Validation failed, do not proceed with the update
        this.toastr.error('Invalid characters detected in one or more input fields. Please remove them and try again.', 'Validation Error');
        return;
      }
  
      // Create a sanitized copy of the data
      const sanitizedData = { ...this.outdated_engine[0] };
      sanitizedData.header = sanitizedHeader;
      sanitizedData.header_description = sanitizedHeaderDesc;
      sanitizedData.title = sanitizedHeaderTitle;
  
      // Update sanitized case data
      this.case1[0] = sanitizedCase1;
      this.case2[0] = sanitizedCase2;
      this.case3[0] = sanitizedCase3;
      this.case4[0] = sanitizedCase4;

     // Update sanitized indicators
     this.indicator_1 = sanitizedIndicators1;
     this.indicator_2 = sanitizedIndicators2;
     this.indicator_3 = sanitizedIndicators3;
     this.indicator_4 = sanitizedIndicators4;
     this.indicator_5 = sanitizedIndicators5;

     // Update sanitized references
     this.references = sanitizedReferences;
  
      this.AdminCase2Service.updateData(sanitizedData).subscribe(
        (updatedItem) => {
          this.router.navigate(['/admin-cases-2']);
          this.toastr.success('Data updated successfully.', 'Success');
        },
        (err) => {
          this.toastr.error('Error updating item.', 'Error');
          console.error('Error updating item. ', err);
        }
      );
      this.isThereAnyChanges = false;
    } else {
      this.toastr.info('No changes were made.', 'Info');
    }
  }

  // Helper function to validate a single input
  isValidInput(input: string): boolean {
    return input.trim() !== ''; // Check if the input is not empty or contains only space
  }
  
  // Track if there is any changes made
  isAnyChanges(){
    return this.isThereAnyChanges;
  }

  // End of main function and methods

  sanitizeInput(input: string): string | null {
    const harmfulChars = /[\<\>\"\\\[\]\{\}\%\=\&\+\*\#\@\^\|\~]/g;
  
    // Check if the input contains harmful characters
    if (harmfulChars.test(input)) {
      // Show a toastr error notification
      return null;
    }
    // If no harmful characters are found, return the sanitized input
    return input;
  }

  // Indicator sanitization function
  sanitizeIndicator(indicator: string[]): string[] {
    return indicator.map((item) => {
      const sanitizedItem = this.sanitizeInput(item);
      return sanitizedItem !== null ? sanitizedItem : '';
    });
  }

  // Reference sanitization function
  sanitizeReferences(references: string[]): string[] {
    return references.map((reference) => {
      const sanitizedReference = this.sanitizeInput(reference);
      return sanitizedReference !== null ? sanitizedReference : '';
    });
  }

  ngOnInit(): void{

    this.getData();

    this.titleService.setTitle(this.title);
  }

  editing_header: boolean = false;
  editing_header_desc: boolean = false;
  editing_title: boolean = false;

  editing_case1: boolean = false;
  editing_case2: boolean = false;
  editing_case3: boolean = false;
  editing_case4: boolean = false;

  editing_indicator_1: boolean[] = [false, false, false, false, false, false];
  editing_indicator_2: boolean[] = [false, false, false, false, false];
  editing_indicator_3: boolean[] = [false, false, false, false];
  editing_indicator_4: boolean[] = [false, false, false, false];
  editing_indicator_5: boolean[] = [false, false, false, false];

  editing_reference: boolean [] =
  [false, false, false];

  // Header
  startEditingHeader() {
    this.editing_header = true;
  }
  finishEditingHeader(event: any) {
    this.editing_header = false;
    this.header = event.target.value;
  }
  doesChange(){
    this.isThereAnyChanges = true;
  }

  // Header Description
  startEditingHeaderDescription() {
    this.editing_header_desc = true;
  }
  finishEditingHeaderDescription(event: any) {
    this.editing_header_desc = false;
    this.header_desc = event.target.value;
  }

  // Title
  startEditingTitle() {
    this.editing_title = true;
  }
  finishEditingTitle(event: any) {
    this.editing_title = false;
    this.header_title = event.target.value;
  }

  // Case1
  startEditingCase1() {
    this.editing_case1 = true;
  }
  finishEditingCase1(event: any) {
    this.editing_case1 = false;
    this.case1[0] = (event.target.value);
  }

  // Case2
  startEditingCase2() {
    this.editing_case2 = true;
  }
  finishEditingCase2(event: any) {
    this.editing_case2 = false;
    this.case2[0] = (event.target.value);
  }

  // Case3
  startEditingCase3() {
    this.editing_case3 = true;
  }
  finishEditingCase3(event: any) {
    this.editing_case3 = false;
    this.case3[0] = (event.target.value);
  }

  // Case4
  startEditingCase4() {
    this.editing_case4 = true;
  }
  finishEditingCase4(event: any) {
    this.editing_case4 = false;
    this.case4[0] = (event.target.value);
  }

  // Indicator 1
  startEditingIndicator1() {
    this.editing_indicator_1[0] = true;
  }
  finishEditingIndicator1(event: any) {
    this.editing_indicator_1[0] = false;
    this.indicator_1[0] = (event.target.value);
  }
  startEditingIndicator1_2() {
    this.editing_indicator_1[1] = true;
  }
  finishEditingIndicator1_2(event: any) {
    this.editing_indicator_1[1] = false;
    this.indicator_1[1] = (event.target.value);
  }
  startEditingIndicator1_3() {
    this.editing_indicator_1[2] = true;
  }
  finishEditingIndicator1_3(event: any) {
    this.editing_indicator_1[2] = false;
    this.indicator_1[2] = (event.target.value);
  }
  startEditingIndicator1_4() {
    this.editing_indicator_1[3] = true;
  }
  finishEditingIndicator1_4(event: any) {
    this.editing_indicator_1[3] = false;
    this.indicator_1[3] = (event.target.value);
  }
  startEditingIndicator1_5() {
    this.editing_indicator_1[4] = true;
  }
  finishEditingIndicator1_5(event: any) {
    this.editing_indicator_1[4] = false;
    this.indicator_1[4] = (event.target.value);
  }
  startEditingIndicator1_6() {
    this.editing_indicator_1[5] = true;
  }
  finishEditingIndicator1_6(event: any) {
    this.editing_indicator_1[5] = false;
    this.indicator_1[5] = (event.target.value);
  }

  // Indicator 2
  startEditingIndicator2() {
    this.editing_indicator_2[0] = true;
  }
  finishEditingIndicator2(event: any) {
    this.editing_indicator_2[0] = false;
    this.indicator_2[0] = (event.target.value);
  }
  startEditingIndicator2_2() {
    this.editing_indicator_2[1] = true;
  }
  finishEditingIndicator2_2(event: any) {
    this.editing_indicator_2[1] = false;
    this.indicator_2[1] = (event.target.value);
  }
  startEditingIndicator2_3() {
    this.editing_indicator_2[2] = true;
  }
  finishEditingIndicator2_3(event: any) {
    this.editing_indicator_2[2] = false;
    this.indicator_2[2] = (event.target.value);
  }
  startEditingIndicator2_4() {
    this.editing_indicator_2[3] = true;
  }
  finishEditingIndicator2_4(event: any) {
    this.editing_indicator_2[3] = false;
    this.indicator_2[3] = (event.target.value);
  }
  startEditingIndicator2_5() {
    this.editing_indicator_2[4] = true;
  }
  finishEditingIndicator2_5(event: any) {
    this.editing_indicator_2[4] = false;
    this.indicator_2[4] = (event.target.value);
  }

  // Indicator 3
  startEditingIndicator3() {
    this.editing_indicator_3[0] = true;
  }
  finishEditingIndicator3(event: any) {
    this.editing_indicator_3[0] = false;
    this.indicator_3[0] = (event.target.value);
  }
  startEditingIndicator3_2() {
    this.editing_indicator_3[1] = true;
  }
  finishEditingIndicator3_2(event: any) {
    this.editing_indicator_3[1] = false;
    this.indicator_3[1] = (event.target.value);
  }
  startEditingIndicator3_3() {
    this.editing_indicator_3[2] = true;
  }
  finishEditingIndicator3_3(event: any) {
    this.editing_indicator_3[2] = false;
    this.indicator_3[2] = (event.target.value);
  }
  startEditingIndicator3_4() {
    this.editing_indicator_3[3] = true;
  }
  finishEditingIndicator3_4(event: any) {
    this.editing_indicator_3[3] = false;
    this.indicator_3[3] = (event.target.value);
  }

  // Indicator 4
  startEditingIndicator4() {
    this.editing_indicator_4[0] = true;
  }
  finishEditingIndicator4(event: any) {
    this.editing_indicator_4[0] = false;
    this.indicator_4[0] = (event.target.value);
  }
  startEditingIndicator4_2() {
    this.editing_indicator_4[1] = true;
  }
  finishEditingIndicator4_2(event: any) {
    this.editing_indicator_4[1] = false;
    this.indicator_4[1] = (event.target.value);
  }
  startEditingIndicator4_3() {
    this.editing_indicator_4[2] = true;
  }
  finishEditingIndicator4_3(event: any) {
    this.editing_indicator_4[2] = false;
    this.indicator_4[2] = (event.target.value);
  }
  startEditingIndicator4_4() {
    this.editing_indicator_4[3] = true;
  }
  finishEditingIndicator4_4(event: any) {
    this.editing_indicator_4[3] = false;
    this.indicator_4[3] = (event.target.value);
  }

  // Indicator 5
  startEditingIndicator5() {
    this.editing_indicator_5[0] = true;
  }
  finishEditingIndicator5(event: any) {
    this.editing_indicator_5[0] = false;
    this.indicator_5[0] = (event.target.value);
  }
  startEditingIndicator5_2() {
    this.editing_indicator_5[1] = true;
  }
  finishEditingIndicator5_2(event: any) {
    this.editing_indicator_5[1] = false;
    this.indicator_5[1] = (event.target.value);
  }
  startEditingIndicator5_3() {
    this.editing_indicator_5[2] = true;
  }
  finishEditingIndicator5_3(event: any) {
    this.editing_indicator_5[2] = false;
    this.indicator_5[2] = (event.target.value);
  }
  startEditingIndicator5_4() {
    this.editing_indicator_5[3] = true;
  }
  finishEditingIndicator5_4(event: any) {
    this.editing_indicator_5[3] = false;
    this.indicator_5[3] = (event.target.value);
  }
  

  // Reference 1
  startEditingRef1() {
    this.editing_reference[0] = true;
  }
  finishEditingRef1(event: any) {
    this.editing_reference[0] = false;
    this.references[0] = (event.target.value);
  }

}
