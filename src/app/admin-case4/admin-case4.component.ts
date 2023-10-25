import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AdminCase4Service } from './admin-case4-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-case4',
  templateUrl: './admin-case4.component.html',
  styleUrls: ['./admin-case4.component.css']
})
export class AdminCase4Component {
  effects_climate_change: any;
  title = "Admin: Related Topics";

  header: string = "";
  header_desc: string = "";
  header_title: string = "";
  case1: string [] = [];
  case2: string [] = [];
  case3: string [] = [];
  case4: string [] = [];
  case4_content: string [] = [];
  references: string [] = [];

  isThereAnyChanges: boolean = false;

  constructor(private http: HttpClient,
    private titleService: Title,
    private AdminCase4Service: AdminCase4Service,
    private router: Router,
    private toastr: ToastrService){}

  // Main methods and functions here
  casePusher(caseArray: string[], caseNumber: string){
    for(let i = 0; i < 4; i++){
      const propertyName = `case${caseNumber}`;
      caseArray.push(this.effects_climate_change[0].cases[propertyName][i]);
    }
  }
  
  caseContentPusher(descArray: string[]){
    for(let i = 0; i < 12; i++){
      descArray.push(this.effects_climate_change[0].case4_content[i]);
    }
  }

  referencePusher(refArray: string[]){
    for(let i = 0; i < 2; i++){
      refArray.push(this.effects_climate_change[0].references[i]);
    }
  }

  getData(): void{
    this.AdminCase4Service.getData().subscribe(incoming_data =>{
      this.effects_climate_change = incoming_data;

      this.header = this.effects_climate_change[0].header;
      this.header_desc = this.effects_climate_change[0].header_description;
      this.header_title = this.effects_climate_change[0].title;

      // Cases
      this.casePusher(this.case1, "1");
      this.casePusher(this.case2, "2");
      this.casePusher(this.case3, "3");
      this.casePusher(this.case4, "4");

      console.log(this.case4_content)
      // Descriptions
      this.caseContentPusher(this.case4_content);

      // Reference
      this.referencePusher(this.references);

    })
  }

  updateData(): void{
    if(this.isAnyChanges()){
      // Validate input fields
    if (
      !this.isValidInput(this.header) ||
      !this.isValidInput(this.header_desc) ||
      !this.isValidInput(this.header_title) ||
      !this.isValidInput(this.case1[0]) ||
      !this.isValidInput(this.case2[0]) ||
      !this.isValidInput(this.case3[0]) ||
      !this.isValidInput(this.case4[0]) ||
      !this.isValidInputArray(this.case4_content)
      // this.case4_content.some(content => !this.isValidInput(content)) ||
      // this.references.some(reference => !this.isValidInput(reference))
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

      
      // Sanitize Case Content
      const sanitizedCaseContent = this.sanitizeCaseContent(this.case4_content);
      
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
        sanitizedCaseContent.some((CaseContent) => CaseContent === '') ||
        sanitizedReferences.some((reference) => reference === '')
        
      ) {
        // Validation failed, do not proceed with the update
        this.toastr.error('Invalid characters detected in one or more input fields. Please remove them and try again.', 'Validation Error');
        return;
      }

      // Create a sanitized copy of the data
      const sanitizedData = { ...this.effects_climate_change[0] };
      sanitizedData.header = sanitizedHeader;
      sanitizedData.header_description = sanitizedHeaderDesc;
      sanitizedData.title = sanitizedHeaderTitle;

       // Update sanitized case data
       this.case1[0] = sanitizedCase1;
       this.case2[0] = sanitizedCase2;
       this.case3[0] = sanitizedCase3;
       this.case4[0] = sanitizedCase4; 

       //Update sanitized Case Content
      this.case4_content = sanitizedCaseContent;
      
      // Update sanitized references
      this.references = sanitizedReferences;

       this.AdminCase4Service.updateData(sanitizedData).subscribe(
        (updatedItem) => {
          this.router.navigate(['/admin-case-4']);
          console.log(this.effects_climate_change[0]);
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
  return input.trim() !== ''; // Check if the input is not empty or contains only spaces
}

// Helper function to validate an array of inputs
isValidInputArray(inputArray: string[]): boolean {
  return inputArray.every(input => input.trim() !== ''); // Check if all inputs in the array are not empty or contain only spaces
}


  sanitizeInput(input: string): string | null {
    const harmfulChars = /[\;\<\>\'\"\\\[\]\{\}\%\&\+\*\#\@\$\^\|\`\~]/g;
  
    // Check if the input contains harmful characters
    if (harmfulChars.test(input)) {
      // Show a toastr error notification
      return null;
    }
    // If no harmful characters are found, return the sanitized input
    return input;
  }

  // Track if there is any change
  isAnyChanges(){
    return this.isThereAnyChanges;
  }

   // Case Content sanitization function
 sanitizeCaseContent(CaseContent: string[]): string[] {
  return CaseContent.map((casecontent) => {
    const sanitizedCaseContent = this.sanitizeInput(casecontent);
    return sanitizedCaseContent !== null ? sanitizedCaseContent : '';
  });
}

 // Reference sanitization function
  sanitizeReferences(references: string[]): string[] {
    return references.map((reference) => {
      const sanitizedReference = this.sanitizeInput(reference);
      return sanitizedReference !== null ? sanitizedReference : '';
    });
  }

  ngOnInit(): void {

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

  editing_case_content: boolean [] =
  [false, false, false, false, false, false, false, false, false, false, false, false];

  editing_reference: boolean [] =
  [false];

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

  // Case Content 1
  startEditingCaseContent1() {
    this.editing_case_content[0] = true;
  }
  finishEditingCaseContent1(event: any) {
    this.editing_case_content[0] = false;
    this.case4_content[0] = event.target.value;
  }

  // Case Content 2
  startEditingCaseContent2() {
    this.editing_case_content[1] = true;
  }
  finishEditingCaseContent2(event: any) {
    this.editing_case_content[1] = false;
    this.case4_content[1] = event.target.value;
  }

  // Case Content 3
  startEditingCaseContent3() {
    this.editing_case_content[2] = true;
  }
  finishEditingCaseContent3(event: any) {
    this.editing_case_content[2] = false;
    this.case4_content[2] = event.target.value;
  }

  // Case Content 4
  startEditingCaseContent4() {
    this.editing_case_content[3] = true;
  }
  finishEditingCaseContent4(event: any) {
    this.editing_case_content[3] = false;
    this.case4_content[3] = event.target.value;
  }

  // Case Content 5
  startEditingCaseContent5() {
    this.editing_case_content[4] = true;
  }
  finishEditingCaseContent5(event: any) {
    this.editing_case_content[4] = false;
    this.case4_content[4] = event.target.value;
  }

  // Case Content 6
  startEditingCaseContent6() {
    this.editing_case_content[5] = true;
  }
  finishEditingCaseContent6(event: any) {
    this.editing_case_content[5] = false;
    this.case4_content[5] = event.target.value;
  }

  // Case Content 7
  startEditingCaseContent7() {
    this.editing_case_content[6] = true;
  }
  finishEditingCaseContent7(event: any) {
    this.editing_case_content[6] = false;
    this.case4_content[6] = event.target.value;
  }

  // Case Content 8
  startEditingCaseContent8() {
    this.editing_case_content[7] = true;
  }
  finishEditingCaseContent8(event: any) {
    this.editing_case_content[7] = false;
    this.case4_content[7] = event.target.value;
  }

  // Case Content 9
  startEditingCaseContent9() {
    this.editing_case_content[8] = true;
  }
  finishEditingCaseContent9(event: any) {
    this.editing_case_content[8] = false;
    this.case4_content[8] = event.target.value;
  }

  // Case Content 10
  startEditingCaseContent10() {
    this.editing_case_content[9] = true;
  }
  finishEditingCaseContent10(event: any) {
    this.editing_case_content[9] = false;
    this.case4_content[9] = event.target.value;
  }

  // Case Content 11
  startEditingCaseContent11() {
    this.editing_case_content[10] = true;
  }
  finishEditingCaseContent11(event: any) {
    this.editing_case_content[10] = false;
    this.case4_content[10] = event.target.value;
  }

  // Case Content 12
  startEditingCaseContent12() {
    this.editing_case_content[11] = true;
  }
  finishEditingCaseContent12(event: any) {
    this.editing_case_content[11] = false;
    this.case4_content[11] = event.target.value;
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
