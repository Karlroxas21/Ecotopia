import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { AdminSolution2Service } from './admin-solution2-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-solution2',
  templateUrl: './admin-solution2.component.html',
  styleUrls: ['./admin-solution2.component.css']
})
export class AdminSolution2Component {
  other_solutions: any;
  title = "Admin: Solution 2";

  header: string = "";
  header_desc: string = "";
  descriptions: string [] = [];
  bullet1: string [] = [];
  bullet2: string [] = [];
  bullet3: string [] = [];
  bullet4: string [] = [];
  bullet5: string [] = [];
  bullet6: string [] = [];
  bullet7: string [] = [];
  bullet8: string [] = [];
  links: string [] = [];
  references: string [] = [];

  isThereAnyChanges: boolean = false;

  constructor(private http: HttpClient,
    private titleService: Title,
    private AdminSolution2Service: AdminSolution2Service,
    private router: Router,
    private toastr: ToastrService){}

  // Main methods and functions here
  bulletPusher(bullet: string[], bulletNumber: string, items: integer){
    for(let i = 0; i < items; i++){
      const propertyName = `bullet_${bulletNumber}`;
      bullet.push(this.other_solutions[0].bullets[propertyName][i]);
    }
  }

  descriptionsPusher(refArray: string[]){
    for(let i = 0; i < 4; i++){
      refArray.push(this.other_solutions[0].descriptions[i]);
    }
  }

  linksPusher(refArray: string[]){
    for(let i = 0; i < 2; i++){
      refArray.push(this.other_solutions[0].links[i]);
    }
  }

  referencePusher(refArray: string[]){
    for(let i = 0; i < 2; i++){
      refArray.push(this.other_solutions[0].references[i]);
    }
  }

  getData(): void{
    this.AdminSolution2Service.getData().subscribe(incoming_data => {
      this.other_solutions = incoming_data;

      this.header = this.other_solutions[0].header;
      this.header_desc = this.other_solutions[0].header_description;

      // Descriptions
      this.descriptionsPusher(this.descriptions);

      // Bullets
      this.bulletPusher(this.bullet1, "1", 2);
      this.bulletPusher(this.bullet2, "2", 2);
      this.bulletPusher(this.bullet3, "3", 2);
      this.bulletPusher(this.bullet4, "4", 2);
      this.bulletPusher(this.bullet5, "5", 2);
      this.bulletPusher(this.bullet6, "6", 2);
      this.bulletPusher(this.bullet7, "7", 2);
      this.bulletPusher(this.bullet8, "8", 2);

      // Links
      this.linksPusher(this.links);

      // References
      this.referencePusher(this.references);
    })
  }

  updateData(): void {
    if (this.isAnyChanges()) {
      // Sanitize input before sending
      const sanitizedHeader = this.sanitizeInput(this.header);
      const sanitizedHeaderDesc = this.sanitizeInput(this.header_desc);

      // Sanitize bullet data
      const sanitizedBullet1 = this.sanitizeInput(this.bullet1[0]);
      const sanitizedBullet2 = this.sanitizeInput(this.bullet2[0]);
      const sanitizedBullet3 = this.sanitizeInput(this.bullet3[0]);
      const sanitizedBullet4 = this.sanitizeInput(this.bullet4[0]);
      const sanitizedBullet5 = this.sanitizeInput(this.bullet5[0]);
      const sanitizedBullet6 = this.sanitizeInput(this.bullet6[0]);
      const sanitizedBullet7 = this.sanitizeInput(this.bullet7[0]);
      const sanitizedBullet8 = this.sanitizeInput(this.bullet8[0]);
      const sanitizedDescriptions = this.sanitizeInput(this.descriptions[0]);
  
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
        sanitizedDescriptions === null
      ) {
        // Validation failed, do not proceed with the update
        this.toastr.error('Invalid characters detected in one or more input fields. Please remove them and try again.', 'Validation Error');
        return;
      }
  
      // Create a sanitized copy of the data
      const sanitizedData = { ...this.other_solutions[0] };
      sanitizedData.header = sanitizedHeader;
      sanitizedData.header_description = sanitizedHeaderDesc;
  
      // Update sanitized bullet data
      this.bullet1[0] = sanitizedBullet1;
      this.bullet2[0] = sanitizedBullet2;
      this.bullet3[0] = sanitizedBullet3;
      this.bullet4[0] = sanitizedBullet4;
      this.bullet5[0] = sanitizedBullet5;
      this.bullet6[0] = sanitizedBullet6;
      this.bullet7[0] = sanitizedBullet7;
      this.bullet8[0] = sanitizedBullet8;
      this.descriptions[0] = sanitizedDescriptions;
  
      this.AdminSolution2Service.updateData(sanitizedData).subscribe(
        (updatedItem) => {
          this.router.navigate(['/admin-cases-2']); //admin-cases-problemtrash
          console.log(this.other_solutions[0]);
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

  sanitizeInput(input: string): string | null {
    const harmfulChars = /[ ]/g;
  
    // Check if the input contains harmful characters
    if (harmfulChars.test(input)) {
      // Show a toastr error notification
      return null;
    }
    // If no harmful characters are found, return the sanitized input
    return input;
  }

  ngOnInit(): void{

    this.getData();

    this.titleService.setTitle(this.title);
  }

  editing_header: boolean = false;
  editing_header_desc: boolean = false;

  editing_descriptions: boolean [] = [false, false, false, false];

  editing_bullet_1: boolean [] = [false, false];
  editing_bullet_2: boolean [] = [false, false];
  editing_bullet_3: boolean [] = [false, false];
  editing_bullet_4: boolean [] = [false, false];
  editing_bullet_5: boolean [] = [false, false];
  editing_bullet_6: boolean [] = [false, false];
  editing_bullet_7: boolean [] = [false, false];
  editing_bullet_8: boolean [] = [false, false];

  editing_links: boolean [] = [false, false];
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

   // Links 1
   startEditingLinks1(){
    this.editing_links[0] = true;
  }
  finishEditingLinks1(event: any){
    this.editing_links[0] = false;
    this.links[0] = event.target.value;
  }

  // Links 2
  startEditingLinks2(){
    this.editing_links[1] = true;
  }
  finishEditingLinks2(event: any){
    this.editing_links[1] = false;
    this.links[1] = event.target.value;
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
