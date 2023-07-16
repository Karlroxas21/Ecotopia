import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-cases',
  templateUrl: './admin-cases.component.html',
  styleUrls: ['./admin-cases.component.css']
})
export class AdminCasesComponent implements OnInit {
  cases: any ;

  //Temporary title only
  title = "Admin: Cases";

  header: string = "";
  header_desc: string = "";
  header_title: string = "";
  cases1: string[] = [];
  cases2: string[] = [];
  cases3: string[] = [];
  cases4: string[] = [];

  constructor(private http: HttpClient, private titleService: Title){}

  ngOnInit(): void{
    this.http.get<any[]>('http://localhost:80/problems')
    .subscribe(cases =>{
      this.cases = cases;
      
      this.header_desc = this.cases[0].header_description;
      this.header = this.cases[0].header;
      this.header_title = this.cases[0].title;
      
      //Case 1
      this.cases1.push(this.cases[0].cases.case1[0]);
      this.cases1.push(this.cases[0].cases.case1[1]);

      //Case 2
      this.cases2.push(this.cases[0].cases.case2[0]);
      this.cases2.push(this.cases[0].cases.case2[1]);

      //Case 3
      this.cases3.push(this.cases[0].cases.case3[0]);
      this.cases3.push(this.cases[0].cases.case3[1]);

      //Case 4
      this.cases4.push(this.cases[0].cases.case4[0]);
      this.cases4.push(this.cases[0].cases.case4[1]);
      console.log(this.cases4);
    })

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
    this.cases1[0] = event.target.value;
  }

  // Case 1.1
  startEditingCase1_1() {
    this.editing_case1_1 = true;
  }
  finishEditingCase1_1(event: any) {
    this.editing_case1_1 = false;
    this.cases1[1] = event.target.value;
  }

  // Case 2.0
  startEditingCase2_0() {
    this.editing_case2_0 = true;
  }
  finishEditingCase2_0(event: any) {
    this.editing_case2_0 = false;
    this.cases2[0] = event.target.value;
  }

  // Case 2.1
  startEditingCase2_1() {
    this.editing_case2_1 = true;
  }
  finishEditingCase2_1(event: any) {
    this.editing_case2_1 = false;
    this.cases2[1] = event.target.value;
  }

  // Case 3.0
  startEditingCase3_0() {
    this.editing_case3_0 = true;
  }
  finishEditingCase3_0(event: any) {
    this.editing_case3_0 = false;
    this.cases3[0] = event.target.value;
  }

  // Case 3.1
  startEditingCase3_1() {
    this.editing_case3_1 = true;
  }
  finishEditingCase3_1(event: any) {
    this.editing_case3_1 = false;
    this.cases3[1] = event.target.value;
  }

  // Case 4.0
  startEditingCase4_0() {
    this.editing_case4_0 = true;
  }
  finishEditingCase4_0(event: any) {
    this.editing_case4_0 = false;
    this.cases4[0] = event.target.value;
  }

   // Case 4.1
   startEditingCase4_1() {
    this.editing_case4_1 = true;
  }
  finishEditingCase4_1(event: any) {
    this.editing_case4_1 = false;
    this.cases4[1] = event.target.value;
  }



 
}
