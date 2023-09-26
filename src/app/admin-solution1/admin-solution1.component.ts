import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { AdminSolution1Service } from './admin-solution1-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-solution1',
  templateUrl: './admin-solution1.component.html',
  styleUrls: ['./admin-solution1.component.css']
})
export class AdminSolution1Component {
  y_should_we_take_action: any;
  title = "Admin: Solution 1";

  header: string = "";
  header_desc: string = "";
  bullet1: string [] = [];
  bullet2: string [] = [];
  bullet3: string [] = [];
  bullet4: string [] = [];
  bullet5: string [] = [];
  bullet6: string [] = [];
  bullet7: string [] = [];
  bullet8: string [] = [];
  bullet9: string [] = [];
  bullet10: string [] = [];
  bullet11: string [] = [];
  bullet12: string [] = [];
  bullet13: string [] = [];
  descriptions: string [] = [];
  references: string [] = [];

  isThereAnyChanges: boolean = false;

  constructor(private http: HttpClient,
    private titleService: Title,
    private AdminSolution1Service: AdminSolution1Service,
    private router: Router,
    private toastr: ToastrService){}

  // Main methods and functions here
  bulletPusher(bullet: string[], bulletNumber: string, items: integer){
    for(let i = 0; i < items; i++){
      const propertyName = `bullet_${bulletNumber}`;
      bullet.push(this.y_should_we_take_action[0].bullets[propertyName][i]);
    }
  }
  
  descriptionsPusher(refArray: string[]){
    for(let i = 0; i < 2; i++){
      refArray.push(this.y_should_we_take_action[0].descriptions[i]);
    }
  }

  referencePusher(refArray: string[]){
    for(let i = 0; i < 2; i++){
      refArray.push(this.y_should_we_take_action[0].references[i]);
    }
  }

  getData():void{
    this.AdminSolution1Service.getData().subscribe(incoming_data => {
      this.y_should_we_take_action = incoming_data;

      this.header = this.y_should_we_take_action[0].header;
      this.header_desc = this.y_should_we_take_action[0].header_description;

      // Bullets
      this.bulletPusher(this.bullet1, "1", 2);
      this.bulletPusher(this.bullet2, "2", 2);
      this.bulletPusher(this.bullet3, "3", 2);
      this.bulletPusher(this.bullet4, "4", 2);
      this.bulletPusher(this.bullet5, "5", 2);
      this.bulletPusher(this.bullet6, "6", 2);
      this.bulletPusher(this.bullet7, "7", 2);
      this.bulletPusher(this.bullet8, "8", 2);
      this.bulletPusher(this.bullet9, "9", 2);
      this.bulletPusher(this.bullet10, "10", 2);
      this.bulletPusher(this.bullet11, "11", 2);
      this.bulletPusher(this.bullet12, "12", 2);
      this.bulletPusher(this.bullet13, "13", 2);

      // Descriptions
      this.descriptionsPusher(this.descriptions);

      // References
      this.referencePusher(this.references);
    });
  }

  updateData(): void {
    if (this.isAnyChanges()) {
      // Sanitize input before sending
      const sanitizedHeader = this.sanitizeInputString(this.header);
      const sanitizedHeaderDesc = this.sanitizeInputString(this.header_desc);

      // Sanitize bullet data
      const sanitizedBullet1 = this.sanitizeInputArray(this.bullet1);
      const sanitizedBullet2 = this.sanitizeInputArray(this.bullet2);
      const sanitizedBullet3 = this.sanitizeInputArray(this.bullet3);
      const sanitizedBullet4 = this.sanitizeInputArray(this.bullet4);
      const sanitizedBullet5 = this.sanitizeInputArray(this.bullet5);
      const sanitizedBullet6 = this.sanitizeInputArray(this.bullet6);
      const sanitizedBullet7 = this.sanitizeInputArray(this.bullet7);
      const sanitizedBullet8 = this.sanitizeInputArray(this.bullet8);
      const sanitizedBullet9 = this.sanitizeInputArray(this.bullet9);
      const sanitizedBullet10 = this.sanitizeInputArray(this.bullet10);
      const sanitizedBullet11 = this.sanitizeInputArray(this.bullet11);
      const sanitizedBullet12 = this.sanitizeInputArray(this.bullet12);
      const sanitizedBullet13 = this.sanitizeInputArray(this.bullet13);

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
        sanitizedBullet3 === null ||
        sanitizedBullet4 === null ||
        sanitizedBullet5 === null ||
        sanitizedBullet6 === null ||
        sanitizedBullet7 === null ||
        sanitizedBullet8 === null ||
        sanitizedBullet9 === null ||
        sanitizedBullet10 === null ||
        sanitizedBullet11 === null ||
        sanitizedBullet12 === null ||
        sanitizedBullet13 === null ||
        sanitizedDescription === null ||
        sanitizedReferences === null)
       {
        // console.log('sanitizedHeader', sanitizedHeader);
        // console.log('sanitizedHeaderDesc', sanitizedHeaderDesc);
        // console.log('sanitizedBullet1', sanitizedBullet1);
        // console.log('sanitizedBullet2', sanitizedBullet2);
        // console.log('sanitizedBullet3', sanitizedBullet3);
        // console.log('sanitizedBullet4', sanitizedBullet4);
        // console.log('sanitizedBullet5', sanitizedBullet5);
        // console.log('sanitizedBullet6', sanitizedBullet6);
        // console.log('sanitizedBullet7', sanitizedBullet7);
        // console.log('sanitizedBullet8', sanitizedBullet8);
        // console.log('sanitizedBullet9', sanitizedBullet9);
        // console.log('sanitizedBullet10', sanitizedBullet10);
        // console.log('sanitizedBullet11', sanitizedBullet11);
        // console.log('sanitizedBullet12', sanitizedBullet12);
        // console.log('sanitizedBullet13', sanitizedBullet13);
        // console.log('sanitizedDescription', sanitizedDescription);
        // console.log('sanitizedReferences', sanitizedReferences);


        // Validation failed, do not proceed with the update
        this.toastr.error('Invalid characters detected in one or more input fields. Please remove them and try again.', 'Validation Error');
        return;
      }
  
      // Create a sanitized copy of the data
      const sanitizedData = { ...this.y_should_we_take_action[0] };
      sanitizedData.header = sanitizedHeader;
      sanitizedData.header_description = sanitizedHeaderDesc;
  
      // Update sanitized bullet data
      sanitizedData.bullet1 = sanitizedBullet1;
      sanitizedData.bullet2 = sanitizedBullet2;
      sanitizedData.bullet3 = sanitizedBullet3;
      sanitizedData.bullet4 = sanitizedBullet4;
      sanitizedData.bullet5 = sanitizedBullet5;
      sanitizedData.bullet6 = sanitizedBullet6;
      sanitizedData.bullet7 = sanitizedBullet7;
      sanitizedData.bullet8 = sanitizedBullet8;
      sanitizedData.bullet9 = sanitizedBullet9;
      sanitizedData.bullet10 = sanitizedBullet10;
      sanitizedData.bullet11 = sanitizedBullet11;
      sanitizedData.bullet12 = sanitizedBullet12;
      sanitizedData.bullet13 = sanitizedBullet13;

      //Update sanitized Case Content
      sanitizedData.descriptions = sanitizedDescription;
      
      // Update sanitized references
      sanitizedData.references = sanitizedReferences;
  
      this.AdminSolution1Service.updateData(sanitizedData).subscribe(
        (updatedItem) => {
          this.router.navigate(['/admin-case-1']); //admin-cases-problemtrash
          console.log(this.y_should_we_take_action[0]);
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
  
  // Track if there is any changes made
  isAnyChanges(){
    return this.isThereAnyChanges;
  }

  // End of main function and methods

  sanitizeInputString(input: string): string | null {
    const harmfulChars = /[\;\(\)\<\>\'\"\\\/\[\]\{\}\%\=\?\&\+\*\#\@\$\^\|\`\~]/g;
  
    // Check if the input contains harmful characters
    if (harmfulChars.test(input)) {
      // Show a toastr error notification
      return null;
    }
    // If no harmful characters are found, return the sanitized input
    return input;
  }
  
  sanitizeInputArray(input: string[]): string[] | null{
    const harmfulChars = /[\\<\>\'\"\\\[\]\{\}\=\?\&\+\*\@\$\^\|\`\~]/g;
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

  editing_header: boolean = false;
  editing_header_desc: boolean = false;

  editing_bullet_1: boolean [] = [false, false];
  editing_bullet_2: boolean [] = [false, false];
  editing_bullet_3: boolean [] = [false, false];
  editing_bullet_4: boolean [] = [false, false];
  editing_bullet_5: boolean [] = [false, false];
  editing_bullet_6: boolean [] = [false, false];
  editing_bullet_7: boolean [] = [false, false];
  editing_bullet_8: boolean [] = [false, false];
  editing_bullet_9: boolean [] = [false, false];
  editing_bullet_10: boolean [] = [false, false];
  editing_bullet_11: boolean [] = [false, false];
  editing_bullet_12: boolean [] = [false, false];
  editing_bullet_13: boolean [] = [false, false];

  editing_descriptions: boolean [] = [false, false];
  editing_references: boolean [] = [false, false];


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
  startEditingHeaderDescription(){
    this.editing_header_desc = true;
  }
  finishEditingHeaderDescription(event: any){
    this.editing_header_desc = false;
    this.header_desc = event.target.value;
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

  // Bullet 3 Title
  startEditingBullet3Title(){
    this.editing_bullet_3[0] = true;
  }
  finishEditingBullet3Title(event: any){
    this.editing_bullet_3[0] = false;
    this.bullet3[0] = event.target.value;
  }

  // Bullet 3 Description
  startEditingBullet3Description(){
    this.editing_bullet_3[1] = true;
  }
  finishEditingBullet3Description(event: any){
    this.editing_bullet_3[1] = false;
    this.bullet3[1] = event.target.value;
  }

  // Bullet 4 Title
  startEditingBullet4Title(){
    this.editing_bullet_4[0] = true;
  }
  finishEditingBullet4Title(event: any){
    this.editing_bullet_4[0] = false;
    this.bullet4[0] = event.target.value;
  }

  // Bullet 4 Description
  startEditingBullet4Description(){
    this.editing_bullet_4[1] = true;
  }
  finishEditingBullet4Description(event: any){
    this.editing_bullet_4[1] = false;
    this.bullet4[1] = event.target.value;
  }

  // Bullet 5 Title
  startEditingBullet5Title(){
    this.editing_bullet_5[0] = true;
  }
  finishEditingBullet5Title(event: any){
    this.editing_bullet_5[0] = false;
    this.bullet5[0] = event.target.value;
  }

  // Bullet 5 Description
  startEditingBullet5Description(){
    this.editing_bullet_5[1] = true;
  }
  finishEditingBullet5Description(event: any){
    this.editing_bullet_5[1] = false;
    this.bullet5[1] = event.target.value;
  }

  // Bullet 6 Title
  startEditingBullet6Title(){
    this.editing_bullet_6[0] = true;
  }
  finishEditingBullet6Title(event: any){
    this.editing_bullet_6[0] = false;
    this.bullet6[0] = event.target.value;
  }

  // Bullet 6 Description
  startEditingBullet6Description(){
    this.editing_bullet_6[1] = true;
  }
  finishEditingBullet6Description(event: any){
    this.editing_bullet_6[1] = false;
    this.bullet6[1] = event.target.value;
  }

  // Bullet 7 Title
  startEditingBullet7Title(){
    this.editing_bullet_7[0] = true;
  }
  finishEditingBullet7Title(event: any){
    this.editing_bullet_7[0] = false;
    this.bullet7[0] = event.target.value;
  }

  // Bullet 7 Description
  startEditingBullet7Description(){
    this.editing_bullet_7[1] = true;
  }
  finishEditingBullet7Description(event: any){
    this.editing_bullet_7[1] = false;
    this.bullet7[1] = event.target.value;
  }

  // Bullet 8 Title
  startEditingBullet8Title(){
    this.editing_bullet_8[0] = true;
  }
  finishEditingBullet8Title(event: any){
    this.editing_bullet_8[0] = false;
    this.bullet8[0] = event.target.value;
  }

  // Bullet 8 Description
  startEditingBullet8Description(){
    this.editing_bullet_8[1] = true;
  }
  finishEditingBullet8Description(event: any){
    this.editing_bullet_8[1] = false;
    this.bullet8[1] = event.target.value;
  }

  // Bullet 9 Title
  startEditingBullet9Title(){
    this.editing_bullet_9[0] = true;
  }
  finishEditingBullet9Title(event: any){
    this.editing_bullet_9[0] = false;
    this.bullet9[0] = event.target.value;
  }

  // Bullet 9 Description
  startEditingBullet9Description(){
    this.editing_bullet_9[1] = true;
  }
  finishEditingBullet9Description(event: any){
    this.editing_bullet_9[1] = false;
    this.bullet9[1] = event.target.value;
  }

  // Bullet 10 Title
  startEditingBullet10Title(){
    this.editing_bullet_10[0] = true;
  }
  finishEditingBullet10Title(event: any){
    this.editing_bullet_10[0] = false;
    this.bullet10[0] = event.target.value;
  }

  // Bullet 10 Description
  startEditingBullet10Description(){
    this.editing_bullet_10[1] = true;
  }
  finishEditingBullet10Description(event: any){
    this.editing_bullet_10[1] = false;
    this.bullet10[1] = event.target.value;
  }

  // Bullet 11 Title
  startEditingBullet11Title(){
    this.editing_bullet_11[0] = true;
  }
  finishEditingBullet11Title(event: any){
    this.editing_bullet_11[0] = false;
    this.bullet11[0] = event.target.value;
  }

  // Bullet 11 Description
  startEditingBullet11Description(){
    this.editing_bullet_11[1] = true;
  }
  finishEditingBullet11Description(event: any){
    this.editing_bullet_11[1] = false;
    this.bullet11[1] = event.target.value;
  }

  // Bullet 12 Title
  startEditingBullet12Title(){
    this.editing_bullet_12[0] = true;
  }
  finishEditingBullet12Title(event: any){
    this.editing_bullet_12[0] = false;
    this.bullet12[0] = event.target.value;
  }

  // Bullet 12 Description
  startEditingBullet12Description(){
    this.editing_bullet_12[1] = true;
  }
  finishEditingBullet12Description(event: any){
    this.editing_bullet_12[1] = false;
    this.bullet12[1] = event.target.value;
  }

  // Bullet 13 Title
  startEditingBullet13Title(){
    this.editing_bullet_13[0] = true;
  }
  finishEditingBullet13Title(event: any){
    this.editing_bullet_13[0] = false;
    this.bullet13[0] = event.target.value;
  }

  // Bullet 13 Description
  startEditingBullet13Description(){
    this.editing_bullet_13[1] = true;
  }
  finishEditingBullet13Description(event: any){
    this.editing_bullet_13[1] = false;
    this.bullet13[1] = event.target.value;
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

  // Reference 1
  startEditingRef1(){
    this.editing_references[0] = true;
  }
  finishEditingRef1(event: any){
    this.editing_references[0] = false;
    this.references[0] = event.target.value;
  }

   // Reference 2
  startEditingRef2(){
    this.editing_references[1] = true;
  }
  finishEditingRef2(event: any){
    this.editing_references[1] = false;
    this.references[1] = event.target.value;
  }

  

  
}
