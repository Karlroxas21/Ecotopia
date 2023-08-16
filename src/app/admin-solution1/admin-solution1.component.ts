import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { AdminSolution1Service } from './admin-solution1-service';
import { Router } from '@angular/router';

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
    private router: Router){}

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

  updateData(): void{
    if(this.isAnyChanges()){
      this.AdminSolution1Service.updateData(this.y_should_we_take_action[0]).subscribe(updatedItem =>{
        this.router.navigate(['/admin-solution-1']);
        console.log(this.y_should_we_take_action[0])
        // Insert toaster here
        console.log('Update success', updatedItem);
      }, (err) => {
        console.error("Error updating item. ", err);
      })
      this.isThereAnyChanges = false;
    }else{
      // Insert toaster here
      console.log("You did not make any changes");
    }
  }

  // Track if there is any changes made
  isAnyChanges(){
    return this.isThereAnyChanges;
  }

  // End of main function and method

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