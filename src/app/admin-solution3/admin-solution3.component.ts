import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { AdminSolution2Service } from '../admin-solution2/admin-solution2-service';
import { Router } from '@angular/router';
import { AdminSolution3Service } from './admin-solution3-service';

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
    private router: Router){ }

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

  updateData(): void{
    if(this.isAnyChanges()){
      this.AdminSolution3Service.updateData(this.responding_to_climate_change[0]).subscribe(updatedData =>{
        this.router.navigate(['/admin-solution-3']);
        
        // Insert toaster here
        console.log('Update success', updatedData);
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

  ngOnInit():void {
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
