import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { AdminCasesService } from './admin-cases-services';
import { Router } from '@angular/router';


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
    private AdminCasesService: AdminCasesService,
    private router:Router){}
  
  // Main Methods and functions here
  bulletPusher(bullet: string[], bulletNumber: string, items: integer){
    for(let i = 0; i < items; i++){
      const propertyName = `bullet_${bulletNumber}`;
      bullet.push(this.problem_trash[0].bullets[propertyName][i]);
    }
  }

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

      //Bullets
      this.bulletPusher(this.bullet1, "1", 3);
      this.bulletPusher(this.bullet2, "2", 5);
      this.bulletPusher(this.bullet3, "3", 5);
      this.bulletPusher(this.bullet4, "4", 6);
      this.bulletPusher(this.bullet5, "5", 3);
      this.bulletPusher(this.bullet6, "6", 8);

      //References
      this.referencePusher(this.references);
    })
  }

  updateData(): void{
    if(this.isAnyChanges()){
      this.AdminCasesService.updateData(this.problem_trash[0]).subscribe(updatedItem =>{
        this.router.navigate(['/admin-cases-problemtrash']);
       console.log(this.problem_trash[0])
        // Insert toaster here
        console.log('Update success', updatedItem);
      },(err)=>{
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

  // End of main function and methods

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

  editing_bullet_1: boolean[] = [false, false, false];

  editing_bullet_2: boolean [] = 
  [false, false, false, false, false];

  editing_bullet_3: boolean [] = 
  [false, false, false, false, false];

  editing_bullet_4: boolean [] = 
  [false, false, false, false, false, false];

  editing_bullet_5: boolean [] = 
  [false, false, false, false];

  editing_bullet_6: boolean [] = 
  [false, false, false, false, false, false, false, false, false];

  editing_reference: boolean [] =
  [false, false, false, false, false, false];

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

  // Bullet 2 Description 2
  startEditingBullet2Desc2() {
    this.editing_bullet_2[2] = true;
  }
  finishEditingBullet2Desc2(event: any) {
    this.editing_bullet_2[2] = false;
    this.bullet2[2] = (event.target.value);
  }

  // Bullet 2 Description 3
  startEditingBullet2Desc3() {
    this.editing_bullet_2[3] = true;
  }
  finishEditingBullet2Desc3(event: any) {
    this.editing_bullet_2[3] = false;
    this.bullet2[3] = (event.target.value);
  }

  // Bullet 2 Description 4
  startEditingBullet2Desc4() {
    this.editing_bullet_2[4] = true;
  }
  finishEditingBullet2Desc4(event: any) {
    this.editing_bullet_2[4] = false;
    this.bullet2[4] = (event.target.value);
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

  // Bullet 4 Title
  startEditingBullet4Title() {
    this.editing_bullet_4[0] = true;
  }
  finishEditingBullet4Title(event: any) {
    this.editing_bullet_4[0] = false;
    this.bullet4[0] = (event.target.value);
  }

  // Bullet 4 Description 1
  startEditingBullet4Desc1() {
    this.editing_bullet_4[1] = true;
  }
  finishEditingBullet4Desc1(event: any) {
    this.editing_bullet_4[1] = false;
    this.bullet4[1] = (event.target.value);
  }

  // Bullet 4 Description 2
  startEditingBullet4Desc2() {
    this.editing_bullet_4[2] = true;
  }
  finishEditingBullet4Desc2(event: any) {
    this.editing_bullet_4[2] = false;
    this.bullet4[2] = (event.target.value);
  }

  // Bullet 4 Description 3
  startEditingBullet4Desc3() {
    this.editing_bullet_4[3] = true;
  }
  finishEditingBullet4Desc3(event: any) {
    this.editing_bullet_4[3] = false;
    this.bullet4[3] = (event.target.value);
  }

  // Bullet 4 Description 4
  startEditingBullet4Desc4() {
    this.editing_bullet_4[4] = true;
  }
  finishEditingBullet4Desc4(event: any) {
    this.editing_bullet_4[4] = false;
    this.bullet4[4] = (event.target.value);
  }

  // Bullet 4 Description 5
  startEditingBullet4Desc5() {
    this.editing_bullet_4[5] = true;
  }
  finishEditingBullet4Desc5(event: any) {
    this.editing_bullet_4[5] = false;
    this.bullet4[5] = (event.target.value);
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
  startEditingBullet5Desc1() {
    this.editing_bullet_5[1] = true;
  }
  finishEditingBullet5Desc1(event: any) {
    this.editing_bullet_5[1] = false;
    this.bullet5[1] = (event.target.value);
  }

  // Bullet 5 Description 2
  startEditingBullet5Desc2() {
    this.editing_bullet_5[2] = true;
  }
  finishEditingBullet5Desc2(event: any) {
    this.editing_bullet_5[2] = false;
    this.bullet5[2] = (event.target.value);
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
  startEditingBullet6Desc1() {
    this.editing_bullet_6[1] = true;
  }
  finishEditingBullet6Desc1(event: any) {
    this.editing_bullet_6[1] = false;
    this.bullet6[1] = (event.target.value);
  }

  // Bullet 6 Description 2
  startEditingBullet6Desc2() {
    this.editing_bullet_6[2] = true;
  }
  finishEditingBullet6Desc2(event: any) {
    this.editing_bullet_6[2] = false;
    this.bullet6[2] = (event.target.value);
  }

  // Bullet 6 Description 3
  startEditingBullet6Desc3() {
    this.editing_bullet_6[3] = true;
  }
  finishEditingBullet6Desc3(event: any) {
    this.editing_bullet_6[3] = false;
    this.bullet6[3] = (event.target.value);
  }

  // Bullet 6 Description 4
  startEditingBullet6Desc4() {
    this.editing_bullet_6[4] = true;
  }
  finishEditingBullet6Desc4(event: any) {
    this.editing_bullet_6[4] = false;
    this.bullet6[4] = (event.target.value);
  }

  // Bullet 6 Description 5
  startEditingBullet6Desc5() {
    this.editing_bullet_6[5] = true;
  }
  finishEditingBullet6Desc5(event: any) {
    this.editing_bullet_6[5] = false;
    this.bullet6[5] = (event.target.value);
  }

 // Bullet 6 Description 6
  startEditingBullet6Desc6() {
    this.editing_bullet_6[6] = true;
  }
  finishEditingBullet6Desc6(event: any) {
    this.editing_bullet_6[6] = false;
    this.bullet6[6] = (event.target.value);
  }

  // Bullet 6 Description 7
  startEditingBullet6Desc7() {
    this.editing_bullet_6[7] = true;
  }
  finishEditingBullet6Desc7(event: any) {
    this.editing_bullet_6[7] = false;
    this.bullet6[7] = (event.target.value);
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

  // Reference 4
  startEditingRef4() {
    this.editing_reference[3] = true;
  }
  finishEditingRef4(event: any) {
    this.editing_reference[3] = false;
    this.references[3] = (event.target.value);
  }

  // Reference 5
  startEditingRef5() {
    this.editing_reference[4] = true;
  }
  finishEditingRef5(event: any) {
    this.editing_reference[4] = false;
    this.references[4] = (event.target.value);
  }

  // Reference 6
  startEditingRef6() {
    this.editing_reference[5] = true;
  }
  finishEditingRef6(event: any) {
    this.editing_reference[5] = false;
    this.references[5] = (event.target.value);
  }
}
