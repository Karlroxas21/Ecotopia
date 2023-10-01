import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { AdminCasesService } from './admin-cases-services';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-admin-case1',
  templateUrl: './admin-case1.component.html',
  styleUrls: ['./admin-case1.component.css']
})

export class AdminCase1Component {
  problem_trash: any;
  title = "Admin: Cases";

  header: string = "";
  header_desc: string = "";
  header_title: string = "";
  case1: string [] = [];
  case2: string [] = [];
  case3: string [] = [];
  case4: string [] = [];
  paragraphs: string [] = [];
  references: string [] = [];

  isThereAnyChanges: boolean = false;

  constructor(private http: HttpClient, 
    private titleService: Title,
    private AdminCasesService: AdminCasesService,
    private router:Router,
    private toastr: ToastrService){}
  
  // Main Methods and functions here
  casePusher(caseArray: string[], caseNumber: string){
    for(let i = 0; i < 1; i++){
      const propertyName = `case${caseNumber}`;
      caseArray.push(this.problem_trash[0].cases[propertyName][i]);
    }
  }

  referencePusher(refArray: string[]){
    for(let i = 0; i < 6; i++){
      refArray.push(this.problem_trash[0].references[i]);
    }
  }

  paragraphsPusher(refArray: string[]){
    for(let i = 0; i < 3; i++){
      refArray.push(this.problem_trash[0].paragraphs[i]);
    }
  }

  getData(): void{
      this.AdminCasesService.getData().subscribe(incoming_data =>{
      this.problem_trash = incoming_data;

      this.header = this.problem_trash[0].header;
      this.header_desc = this.problem_trash[0].header_description;
      this.header_title = this.problem_trash[0].title;

      //Cases
      this.casePusher(this.case1, "1");
      this.casePusher(this.case2, "2");
      this.casePusher(this.case3, "3");
      this.casePusher(this.case4, "4");

      // Paragraphs
      this.paragraphsPusher(this.paragraphs);

      //References
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
      !this.isValidInputArray(this.paragraphs)
      // !this.isValidInputArray(this.references)
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

      // Sanitize paragraphs
      const sanitizedParagraphs = this.sanitizeArray(this.paragraphs);
  
      // Sanitize references
      const sanitizedReferences = this.sanitizeArray(this.references);
  
      // Check if any of the inputs failed validation
      if (
        sanitizedHeader === null ||
        sanitizedHeaderDesc === null ||
        sanitizedHeaderTitle === null ||
        sanitizedCase1 === null ||
        sanitizedCase2 === null ||
        sanitizedCase3 === null ||
        sanitizedCase4 === null ||
        sanitizedParagraphs === null ||
        sanitizedReferences === null
      ) {
        // Validation failed, do not proceed with the update
        this.toastr.error('Invalid characters detected in one or more input fields. Please remove them and try again.', 'Validation Error');
        return;
      }
  
      // Create a sanitized copy of the data
      const sanitizedData = { ...this.problem_trash[0] };
      sanitizedData.header = sanitizedHeader;
      sanitizedData.header_description = sanitizedHeaderDesc;
      sanitizedData.title = sanitizedHeaderTitle;
  
      // Update sanitized case data
      this.case1[0] = sanitizedCase1;
      this.case2[0] = sanitizedCase2;
      this.case3[0] = sanitizedCase3;
      this.case4[0] = sanitizedCase4;

     // Update sanitized paragraphs and references
     this.paragraphs = sanitizedParagraphs;
     this.references = sanitizedReferences;
  
      this.AdminCasesService.updateData(sanitizedData).subscribe(
        (updatedItem) => {
          this.router.navigate(['/admin-cases-1']); //default: admin-case-problem-trash
          console.log(this.problem_trash[0]);
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

  sanitizeArray(inputArray: string[]): string[] | null {
    const sanitizedArray: string[] = [];
    for (const item of inputArray) {
      const sanitizedItem = this.sanitizeInput(item);
      if (sanitizedItem === null) {
        // If any item in the array fails sanitization, return null
        return null;
      }
      sanitizedArray.push(sanitizedItem);
    }
    return sanitizedArray;
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

  editing_paragraphs: boolean[] = [false, false, false];

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

  // Paragraph1
  startEditingParagraph1() {
    this.editing_paragraphs[0] = true;
  }
  finishEditingparagraph1(event: any) {
    this.editing_paragraphs[0] = false;
    this.paragraphs[0] = (event.target.value);
  }

  startEditingParagraph2() {
    this.editing_paragraphs[1] = true;
  }
  finishEditingparagraph2(event: any) {
    this.editing_paragraphs[1] = false;
    this.paragraphs[1] = (event.target.value);
  }

  startEditingParagraph3() {
    this.editing_paragraphs[2] = true;
  }
  finishEditingparagraph3(event: any) {
    this.editing_paragraphs[2] = false;
    this.paragraphs[2] = (event.target.value);
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
