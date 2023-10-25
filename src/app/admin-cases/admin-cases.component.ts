import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { AdminService } from './admin-cases-services';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-cases',
  templateUrl: './admin-cases.component.html',
  styleUrls: ['./admin-cases.component.css']
})
export class AdminCasesComponent implements OnInit {
  cases: any ;

  //Temporary title only
  title = "Admin: SDG#13";

  header: string = "";
  header_desc: string = "";
  header_title: string = "";
  case1: string[] = [];
  case2: string[] = [];
  case3: string[] = [];
  case4: string[] = [];

  isThereAnyChanges: boolean = false;

  constructor(private http: HttpClient, 
    private titleService: Title,
    private AdminCase: AdminService,
    private router: Router,
    private toastr: ToastrService){}

  casePusher(caseArray: string[], caseNumber: string){
    for(let i = 0; i < 4; i++){
      const propertyName = `case${caseNumber}`;
      caseArray.push(this.cases[0].cases[propertyName][i]);
    }
  }  

  getData():void {
    this.AdminCase.getData().subscribe(incoming_data => {
      this.cases = incoming_data;

      this.header = this.cases[0].header;
      this.header_desc = this.cases[0].header_description;
      this.header_title = this.cases[0].title;

      this.casePusher(this.case1, "1");
      this.casePusher(this.case2, "2");
      this.casePusher(this.case3, "3");
      this.casePusher(this.case4, "4");
      
    })
  }

  updateData(): void {
    if (this.isAnyChanges()) {

      // Validate input fields
      if (
        !this.isValidInput(this.header) ||
        !this.isValidInput(this.header_desc) ||
        !this.isValidInput(this.header_title) ||
        !this.isValidInputArray(this.case1) ||
        !this.isValidInputArray(this.case2) ||
        !this.isValidInputArray(this.case3) ||
        !this.isValidInputArray(this.case4)
      ) {
        // Validation failed, do not proceed with the update
        this.toastr.error('Please fill in all input fields before updating.', 'Validation Error');
        return;
      }
            
      // Sanitize input before sending
      const sanitizedHeader = this.sanitizeInputString(this.header);
      const sanitizedHeaderDesc = this.sanitizeInputString(this.header_desc);
      const sanitizedHeaderTitle = this.sanitizeInputString(this.header_title);

      // Sanitize bullet data
      const sanitizedBullet1 = this.sanitizeInputArray(this.case1);
      const sanitizedBullet2 = this.sanitizeInputArray(this.case2);
      const sanitizedBullet3 = this.sanitizeInputArray(this.case3);
      const sanitizedBullet4 = this.sanitizeInputArray(this.case4);

      // Check if any of the inputs failed validation
      if (
        sanitizedHeader === null ||
        sanitizedHeaderDesc === null ||
        sanitizedHeaderTitle === null ||
        sanitizedBullet1 === null ||
        sanitizedBullet2 === null ||
        sanitizedBullet3 === null ||
        sanitizedBullet4 === null)
       {

        // Validation failed, do not proceed with the update
        this.toastr.error('Invalid characters detected in one or more input fields. Please remove them and try again.', 'Validation Error');
        return;
      }
  
      // Create a sanitized copy of the data
      const sanitizedData = { ...this.cases[0] };
      sanitizedData.header = sanitizedHeader;
      sanitizedData.header_description = sanitizedHeaderDesc;
      sanitizedData.header_title = sanitizedHeaderTitle;
  
      // Update sanitized bullet data
      sanitizedData.bullet1 = sanitizedBullet1;
      sanitizedData.bullet2 = sanitizedBullet2;
      sanitizedData.bullet3 = sanitizedBullet3;
      sanitizedData.bullet4 = sanitizedBullet4;

  
      this.AdminCase.updateData(sanitizedData).subscribe(
        (updatedItem) => {
          this.router.navigate(['/admin-cases']);
          console.log(this.cases[0]);
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
  
  // Helper function to validate an array of inputs
  isValidInputArray(inputArray: string[]): boolean {
    return inputArray.every(input => this.isValidInput(input));
  }

  // Track if there is any changes made
  isAnyChanges(){
    return this.isThereAnyChanges;
  }

  // End of main function and methods

  sanitizeInputString(input: string): string | null {
    const harmfulChars = /[\;\<\>\\\/\[\]\{\}\%\=\?\&\+\*\#\@\$\^\|\`\~]/g;
  
    // Check if the input contains harmful characters
    if (harmfulChars.test(input)) {
      // Show a toastr error notification
      return null;
    }
    // If no harmful characters are found, return the sanitized input
    return input;
  }
  
  sanitizeInputArray(input: string[]): string[] | null{
    const harmfulChars = /[\;\<\>\\\/\[\]\{\}\%\=\?\&\+\*\#\@\$\^\|\`\~]/g;
    const sanitizedInput: string[] = [];

    for(const str of input){
      // Check if the string array contains harmful chars
      if(harmfulChars.test(str)){

        console.log(`Harmful character detected in string: ${str}`);
        console.log(`Harmful character: ${str.match(harmfulChars)}`);
        return null;
      }

      sanitizedInput.push(str);
    }

    return sanitizedInput;
  }

  ngOnInit(): void{
    
    this.getData();

    this.titleService.setTitle(this.title);
  }

  // Inline-edit
  editing_header: boolean = false;
  editing_header_description: boolean = false;
  editing_header_title: boolean = false;
  editing_case1_0: boolean = false; 
  editing_case1_1: boolean = false; 

  editing_case2_0: boolean = false; 
  editing_case2_1: boolean = false;

  editing_case3_0: boolean = false; 
  editing_case3_1: boolean = false; 

  editing_case4_0: boolean = false; 
  editing_case4_1: boolean = false;  

  doesChange(){
    this.isThereAnyChanges = true;
  }

  // Header
  startEditingHeader() {
    this.editing_header = true;
  }

  finishEditingHeader(event: any) {
    this.editing_header = false;
    this.header = event.target.value;
  }

  // Header Description
  startEditingHeaderDescription() {
    this.editing_header_description = true;
  }
  finishEditingHeaderDescription(event: any) {
    this.editing_header_description = false;
    this.header_desc = event.target.value;
  }

  // Title
  startEditingTitle() {
    this.editing_header_title = true;
  }
  finishEditingTitle(event: any) {
    this.editing_header_title = false;
    this.header_title = event.target.value;
  }

  // Case 1.0
  startEditingCase1_0() {
    this.editing_case1_0 = true;
  }
  finishEditingCase1_0(event: any) {
    this.editing_case1_0 = false;
    this.case1[0] = event.target.value;
  }

  // Case 1.1
  startEditingCase1_1() {
    this.editing_case1_1 = true;
  }
  finishEditingCase1_1(event: any) {
    this.editing_case1_1 = false;
    this.case1[1] = event.target.value;
  }

  // Case 2.0
  startEditingCase2_0() {
    this.editing_case2_0 = true;
  }
  finishEditingCase2_0(event: any) {
    this.editing_case2_0 = false;
    this.case2[0] = event.target.value;
  }

  // Case 2.1
  startEditingCase2_1() {
    this.editing_case2_1 = true;
  }
  finishEditingCase2_1(event: any) {
    this.editing_case2_1 = false;
    this.case2[1] = event.target.value;
  }

  // Case 3.0
  startEditingCase3_0() {
    this.editing_case3_0 = true;
  }
  finishEditingCase3_0(event: any) {
    this.editing_case3_0 = false;
    this.case3[0] = event.target.value;
  }

  // Case 3.1
  startEditingCase3_1() {
    this.editing_case3_1 = true;
  }
  finishEditingCase3_1(event: any) {
    this.editing_case3_1 = false;
    this.case3[1] = event.target.value;
  }

  // Case 4.0
  startEditingCase4_0() {
    this.editing_case4_0 = true;
  }
  finishEditingCase4_0(event: any) {
    this.editing_case4_0 = false;
    this.case4[0] = event.target.value;
  }

   // Case 4.1
   startEditingCase4_1() {
    this.editing_case4_1 = true;
  }
  finishEditingCase4_1(event: any) {
    this.editing_case4_1 = false;
    this.case4[1] = event.target.value;
  }
}
