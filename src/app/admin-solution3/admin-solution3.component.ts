import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AdminSolution3Service } from './admin-solution3-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-solution3',
  templateUrl: './admin-solution3.component.html',
  styleUrls: ['./admin-solution3.component.css']
})
export class AdminSolution3Component {
  responding_to_climate_change: any;
  title = "Admin: Solution 3";

  header: string = "";
  header_desc = "";
  descriptions: string [] = [];
  bullet1: string [] = [];
  bullet2: string [] = [];
  references: string [] = [];

  isThereAnyChanges: boolean = false;

  constructor(private http: HttpClient,
    private titleService: Title,
    private AdminSolution3Service: AdminSolution3Service,
    private router: Router,
    private toastr: ToastrService){}

  // Main method and functions here
  bulletPusher(bullet: string[], bulletNumber: string, items: integer){
    for(let i = 0; i < items; i++){
      const propertyName = `bullet_${bulletNumber}`;
      bullet.push(this.responding_to_climate_change[0].bullets[propertyName][i]);
    }
  }

  descriptionsPusher(refArray: string[]){
    for(let i = 0; i < 6; i++){
      refArray.push(this.responding_to_climate_change[0].descriptions[i]);
    }
  }

  referencePusher(refArray: string[]){
    for(let i = 0; i < 1; i++){
      refArray.push(this.responding_to_climate_change[0].references[i]);
    }
  }

  getData(): void{
    this.AdminSolution3Service.getData().subscribe(incoming_data =>{
      this.responding_to_climate_change = incoming_data;

      this.header = this.responding_to_climate_change[0].header;
      this.header_desc = this.responding_to_climate_change[0].header_description;

      // Descriptions
      this.descriptionsPusher(this.descriptions);

      // Bullets
      this.bulletPusher(this.bullet1, "1", 2);
      this.bulletPusher(this.bullet2, "2", 2);

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
      !this.isValidInputArray(this.descriptions) ||
      !this.isValidInputArray(this.bullet1) ||
      !this.isValidInputArray(this.bullet2) ||
      !this.isValidInputArray(this.references)
    ) {
      // Validation failed, do not proceed with the update
      this.toastr.error('Please fill in all input fields before updating.', 'Validation Error');
      return;
    }

      // Sanitize input before sending
      const sanitizedHeader = this.sanitizeInputString(this.header);
      const sanitizedHeaderDesc = this.sanitizeInputString(this.header_desc);

      // Sanitize bullet data
      const sanitizedBullet1 = this.sanitizeInputArray(this.bullet1);
      const sanitizedBullet2 = this.sanitizeInputArray(this.bullet2);

      // Sanitize descriptions
      const sanitizedDescription = this.sanitizeInputArray(this.descriptions);
      
      // Sanitize references
      const sanitizedReferences = this.sanitizeInputArray(this.references);
  
      // Check if any of the inputs failed validation
      if (
        sanitizedHeader === null ||
        sanitizedHeaderDesc === null ||
        sanitizedBullet1 === null ||
        sanitizedBullet2 === null ||
        sanitizedDescription === null ||
        sanitizedReferences === null)
       {

        // Validation failed, do not proceed with the update
        this.toastr.error('Invalid characters detected in one or more input fields. Please remove them and try again.', 'Validation Error');
        return;
      }
  
      // Create a sanitized copy of the data
      const sanitizedData = { ...this.responding_to_climate_change[0] };
      sanitizedData.header = sanitizedHeader;
      sanitizedData.header_description = sanitizedHeaderDesc;
  
      // Update sanitized bullet data
      sanitizedData.bullet1 = sanitizedBullet1;
      sanitizedData.bullet2 = sanitizedBullet2;

      //Update sanitized Solution Content
      sanitizedData.descriptions = sanitizedDescription;
      
      // Update sanitized references
      sanitizedData.references = sanitizedReferences;
  
      this.AdminSolution3Service.updateData(sanitizedData).subscribe(
        (updatedItem) => {
          this.router.navigate(['/admin-solution3']);
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
    const harmfulChars = /[\;\<\>\"\\\/\[\]\{\}\%\=\?\&\+\*\#\@\$\^\|\`\~]/g;
  
    // Check if the input contains harmful characters
    if (harmfulChars.test(input)) {
      // Show a toastr error notification
      return null;
    }
    // If no harmful characters are found, return the sanitized input
    return input;
  }
  
  sanitizeInputArray(input: string[]): string[] | null{
    const harmfulChars = /[\<\>\"\\\[\]\{\}\=\?\&\+\*\@\$\^\|\`\~]/g;
    const sanitizedInput: string[] = [];

    for(const str of input){
      // Check if the string array contains harmful chars
      if(harmfulChars.test(str)){

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

  editing_header: boolean = false;
  editing_header_desc: boolean = false;

  editing_descriptions: boolean [] = [false, false, false, false, false, false];

  editing_bullet_1: boolean [] = [false, false];
  editing_bullet_2: boolean [] = [false, false];

  editing_references: boolean [] = [false];

   // Header
   startEditingHeader(){
    this.editing_header = true;
  }
  finishEditingHeader(event: any){
    this.editing_header = false;
    this.header = event.target.value;
  }

  // Track if there is any changes made in HTML
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

  // Description 1
  startEditingDesc1(){
    this.editing_descriptions[0] = true;
  }
  finishEditingDesc1(event: any){
    this.editing_descriptions[0] = false;
    this.descriptions[0] = event.target.value;
  }

  // Description 2
  startEditingDesc2(){
    this.editing_descriptions[1] = true;
  }
  finishEditingDesc2(event: any){
    this.editing_descriptions[1] = false;
    this.descriptions[1] = event.target.value;
  }

  // Description 3
  startEditingDesc3(){
    this.editing_descriptions[2] = true;
  }
  finishEditingDesc3(event: any){
    this.editing_descriptions[2] = false;
    this.descriptions[2] = event.target.value;
  }

  // Description 4
  startEditingDesc4(){
    this.editing_descriptions[3] = true;
  }
  finishEditingDesc4(event: any){
    this.editing_descriptions[3] = false;
    this.descriptions[3] = event.target.value;
  }

  // Description 5
  startEditingDesc5(){
    this.editing_descriptions[4] = true;
  }
  finishEditingDesc5(event: any){
    this.editing_descriptions[4] = false;
    this.descriptions[4] = event.target.value;
  }

   // Description 6
   startEditingDesc6(){
    this.editing_descriptions[5] = true;
  }
  finishEditingDesc6(event: any){
    this.editing_descriptions[5] = false;
    this.descriptions[5] = event.target.value;
  }

  // Bullet 1 Title
  startEditingBullet1Title(){
    this.editing_bullet_1[0] = true;
  }
  finishEditingBullet1Title(event: any){
    this.editing_bullet_1[0] = false;
    this.bullet1[0] = event.target.value;
  }

  // Bullet 1 Description
  startEditingBullet1Description(){
    this.editing_bullet_1[1] = true;
  }
  finishEditingBullet1Description(event: any){
    this.editing_bullet_1[1] = false;
    this.bullet1[1] = event.target.value;
  }

  // Bullet 2 Title
  startEditingBullet2Title(){
    this.editing_bullet_2[0] = true;
  }
  finishEditingBullet2Title(event: any){
    this.editing_bullet_2[0] = false;
    this.bullet2[0] = event.target.value;
  }

  // Bullet 2 Description
  startEditingBullet2Description(){
    this.editing_bullet_2[1] = true;
  }
  finishEditingBullet2Description(event: any){
    this.editing_bullet_2[1] = false;
    this.bullet2[1] = event.target.value;
  }

  // Reference 1
  startEditingRef1(){
    this.editing_references[0] = true;
  }
  finishEditingRef1(event: any){
    this.editing_references[0] = false;
    this.references[0] = event.target.value;
  }
}
