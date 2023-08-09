import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AdminCase4Service } from './admin-case4-service';

@Component({
  selector: 'app-admin-case4',
  templateUrl: './admin-case4.component.html',
  styleUrls: ['./admin-case4.component.css']
})
export class AdminCase4Component {
  effects_climate_change: any;
  title = "Admin: Case 4";

  header: string = "";
  header_desc: string = "";
  header_title: string = "";
  case1: string [] = [];
  case2: string [] = [];
  case3: string [] = [];
  case4: string [] = [];
  descriptions: string [] = [];
  bullet1: string [] = [];
  bullet2: string [] = [];
  bullet3: string [] = [];
  bullet4: string [] = [];
  bullet5: string [] = [];
  bullet6: string [] = [];
  bullet7: string [] = [];
  references: string [] = [];

  isThereAnyChanges: boolean = false;

  constructor(private http: HttpClient,
    private titleService: Title,
    private AdminCase4Service: AdminCase4Service,
    private router: Router){}

  // Main methods and functions here
  bulletPusher(bullet: string[], bulletNumber: string, items: integer){
    for(let i = 0; i < items; i++){
      const propertyName = `bullet_${bulletNumber}`;
      bullet.push(this.effects_climate_change[0].bullets[propertyName][i]);
    }
  }

  casePusher(caseArray: string[], caseNumber: string){
    for(let i = 0; i < 4; i++){
      const propertyName = `case${caseNumber}`;
      caseArray.push(this.effects_climate_change[0].cases[propertyName][i]);
    }
  }
  
  descriptionPusher(descArray: string[]){
    for(let i = 0; i < 1; i++){
      descArray.push(this.effects_climate_change[0].descriptions[i]);
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

      // Descriptions
      this.descriptionPusher(this.descriptions);

      // Bullets
      this.bulletPusher(this.bullet1, "1", 2);
      this.bulletPusher(this.bullet2, "2", 2);
      this.bulletPusher(this.bullet3, "3", 2);
      this.bulletPusher(this.bullet4, "4", 2);
      this.bulletPusher(this.bullet5, "5", 2);
      this.bulletPusher(this.bullet6, "6", 2);
      this.bulletPusher(this.bullet7, "7", 2);

      // Reference
      this.referencePusher(this.references);

      console.log(this.effects_climate_change);
    })
  }

  updateData(): void{
    if(this.isAnyChanges()){
      this.AdminCase4Service.updateData(this.effects_climate_change[0]).subscribe(updatedItem =>{
        this.router.navigate(['/admin-case-4']);
        // Insert toaster here
        console.log('Update success,', updatedItem);
      }, (err) =>{
        console.error("Error updating item. ", err);
      });
      this.isThereAnyChanges = false;
    }else{
      // Insert toaster here
      console.log("You did not make any changes");
    }
  }

  // Track if there is any change
  isAnyChanges(){
    return this.isThereAnyChanges;
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

  editing_descriptions: boolean [] =
  [false];

  editing_bullet_1: boolean [] = [false, false];

  editing_bullet_2: boolean [] = [false, false];

  editing_bullet_3: boolean [] = [false, false];

  editing_bullet_4: boolean [] = [false, false];

  editing_bullet_5: boolean [] = [false, false];

  editing_bullet_6: boolean [] = [false, false];

  editing_bullet_7: boolean [] = [false, false];

  editing_reference: boolean [] =
  [false, false];

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

  // Description 1
  startEditingDesc1() {
    this.editing_descriptions[0] = true;
  }
  finishEditingDesc1(event: any) {
    this.editing_descriptions[0] = false;
    this.descriptions[0] = (event.target.value);
  }

  // Bullet 1 Title
  startEditingBullet1Title() {
    this.editing_bullet_1[0] = true;
  }
  finishEditingBullet1Title(event: any) {
    this.editing_bullet_1[0] = false;
    this.bullet1[0] = (event.target.value);
  }

  // Bullet 1 Description 1
  startEditingBullet1Description1() {
    this.editing_bullet_1[1] = true;
  }
  finishEditingBullet1Description1(event: any) {
    this.editing_bullet_1[1] = false;
    this.bullet1[1] = (event.target.value);
  }

  // Bullet 2 Title
  startEditingBullet2Title() {
    this.editing_bullet_2[0] = true;
  }
  finishEditingBullet2Title(event: any) {
    this.editing_bullet_2[0] = false;
    this.bullet2[0] = (event.target.value);
  }

  // Bullet 2 Description 1
  startEditingBullet2Description1() {
    this.editing_bullet_2[1] = true;
  }
  finishEditingBullet2Description1(event: any) {
    this.editing_bullet_2[1] = false;
    this.bullet2[1] = (event.target.value);
  }

  // Bullet 3 Title
  startEditingBullet3Title() {
    this.editing_bullet_3[0] = true;
  }
  finishEditingBullet3Title(event: any) {
    this.editing_bullet_3[0] = false;
    this.bullet3[0] = (event.target.value);
  }

  // Bullet 3 Description 1
  startEditingBullet3Description1() {
    this.editing_bullet_3[1] = true;
  }
  finishEditingBullet3Description1(event: any) {
    this.editing_bullet_3[1] = false;
    this.bullet3[1] = (event.target.value);
  }

  // Bullet 4 Title
  startEditingBullet4Title() {
    this.editing_bullet_4[0] = true;
  }
  finishEditingBullet4Title(event: any) {
    this.editing_bullet_4[0] = false;
    this.bullet4[0] = (event.target.value);
  }

  // Bullet 4 Description 1
  startEditingBullet4Description1() {
    this.editing_bullet_4[1] = true;
  }
  finishEditingBullet4Description1(event: any) {
    this.editing_bullet_4[1] = false;
    this.bullet4[1] = (event.target.value);
  }

  // Bullet 5 Title
  startEditingBullet5Title() {
    this.editing_bullet_5[0] = true;
  }
  finishEditingBullet5Title(event: any) {
    this.editing_bullet_5[0] = false;
    this.bullet5[0] = (event.target.value);
  }

  // Bullet 5 Description 1
  startEditingBullet5Description1() {
    this.editing_bullet_5[1] = true;
  }
  finishEditingBullet5Description1(event: any) {
    this.editing_bullet_5[1] = false;
    this.bullet5[1] = (event.target.value);
  }

  // Bullet 6 Title
  startEditingBullet6Title() {
    this.editing_bullet_6[0] = true;
  }
  finishEditingBullet6Title(event: any) {
    this.editing_bullet_6[0] = false;
    this.bullet6[0] = (event.target.value);
  }

  // Bullet 6 Description 1
  startEditingBullet6Description1() {
    this.editing_bullet_6[1] = true;
  }
  finishEditingBullet6Description1(event: any) {
    this.editing_bullet_6[1] = false;
    this.bullet6[1] = (event.target.value);
  }

  // Bullet 7 Title
  startEditingBullet7Title() {
    this.editing_bullet_7[0] = true;
  }
  finishEditingBullet7Title(event: any) {
    this.editing_bullet_7[0] = false;
    this.bullet7[0] = (event.target.value);
  }

  // Bullet 7 Description 1
  startEditingBullet7Description1() {
    this.editing_bullet_7[1] = true;
  }
  finishEditingBullet7Description1(event: any) {
    this.editing_bullet_7[1] = false;
    this.bullet7[1] = (event.target.value);
  }

  // Reference 1
  startEditingRef1() {
    this.editing_reference[0] = true;
  }
  finishEditingRef1(event: any) {
    this.editing_reference[0] = false;
    this.references[0] = (event.target.value);
  }

  // Reference 2
  startEditingRef2() {
    this.editing_reference[1] = true;
  }
  finishEditingRef2(event: any) {
    this.editing_reference[1] = false;
    this.references[1] = (event.target.value);
  }
}
