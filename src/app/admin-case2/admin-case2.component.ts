import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router';
import { AdminCase2Service } from './admin-case2-service';

@Component({
  selector: 'app-admin-case2',
  templateUrl: './admin-case2.component.html',
  styleUrls: ['./admin-case2.component.css']
})
export class AdminCase2Component implements OnInit {
  outdated_engine: any;
  title = "Admin: Case 2";

  header: string = "";
  header_desc: string = "";
  header_title: string = "";
  case1: string [] = [];
  case2: string [] = [];
  case3: string [] = [];
  case4: string [] = [];
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
    private AdminCase2Service: AdminCase2Service,
    private router: Router){}

  // Main Methods and functions here
  bulletPusher(bullet: string[], bulletNumber: string, items: integer){
    for(let i = 0; i < items; i++){
      const propertyName = `bullet_${bulletNumber}`;
      bullet.push(this.outdated_engine[0].bullets[propertyName][i]);
    }
  }

  casePusher(caseArray: string[], caseNumber: string){
    for(let i = 0; i < 1; i++){
      const propertyName = `case${caseNumber}`;
      caseArray.push(this.outdated_engine[0].cases[propertyName][i]);
    }
  }

  referencePusher(refArray: string[]){
    for(let i = 0; i < 3; i++){
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

      // Bullets
      this.bulletPusher(this.bullet1, "1", 5);
      this.bulletPusher(this.bullet2, "2", 2);
      this.bulletPusher(this.bullet3, "3", 4);

      // Reference
      this.referencePusher(this.references);

    })
  }

  updateData(): void{
    if(this.isAnyChanges()){
      this.AdminCase2Service.updateData(this.outdated_engine[0]).subscribe(updatedItem =>{
        this.router.navigate(['/admin-case-2']);
        // Insert toaster here
        console.log('Update success', updatedItem);
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

  editing_bullet_1: boolean[] = [false, false, false, false, false];

  editing_bullet_2: boolean [] = 
  [false, false];

  editing_bullet_3: boolean [] = 
  [false, false, false, false];

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

  // Bullet 1 Description 2
  startEditingBullet1Description2() {
    this.editing_bullet_1[2] = true;
  }
  finishEditingBullet1Description2(event: any) {
    this.editing_bullet_1[2] = false;
    this.bullet1[2] = (event.target.value);
  }

  // Bullet 1 Description 3
  startEditingBullet1Description3() {
    this.editing_bullet_1[3] = true;
  }
  finishEditingBullet1Description3(event: any) {
    this.editing_bullet_1[3] = false;
    this.bullet1[3] = (event.target.value);
  }

  // Bullet 1 Description 4
  startEditingBullet1Description4() {
    this.editing_bullet_1[4] = true;
  }
  finishEditingBullet1Description4(event: any) {
    this.editing_bullet_1[4] = false;
    this.bullet1[4] = (event.target.value);
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
  startEditingBullet2Desc1() {
    this.editing_bullet_2[1] = true;
  }
  finishEditingBullet2Desc1(event: any) {
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
  startEditingBullet3Desc1() {
    this.editing_bullet_3[1] = true;
  }
  finishEditingBullet3Desc1(event: any) {
    this.editing_bullet_3[1] = false;
    this.bullet3[1] = (event.target.value);
  }

  // Bullet 3 Description 2
  startEditingBullet3Desc2() {
    this.editing_bullet_3[2] = true;
  }
  finishEditingBullet3Desc2(event: any) {
    this.editing_bullet_3[2] = false;
    this.bullet3[2] = (event.target.value);
  }

  // Bullet 3 Description 3
  startEditingBullet3Desc3() {
    this.editing_bullet_3[3] = true;
  }
  finishEditingBullet3Desc3(event: any) {
    this.editing_bullet_3[3] = false;
    this.bullet3[3] = (event.target.value);
  }

  // Bullet 3 Description 4
  startEditingBullet3Desc4() {
    this.editing_bullet_3[4] = true;
  }
  finishEditingBullet3Desc4(event: any) {
    this.editing_bullet_3[4] = false;
    this.bullet3[4] = (event.target.value);
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

  // Reference 3
  startEditingRef3() {
    this.editing_reference[2] = true;
  }
  finishEditingRef3(event: any) {
    this.editing_reference[2] = false;
    this.references[2] = (event.target.value);
  }
}
