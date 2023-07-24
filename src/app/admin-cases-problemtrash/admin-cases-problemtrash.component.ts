import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-cases-problemtrash',
  templateUrl: './admin-cases-problemtrash.component.html',
  styleUrls: ['./admin-cases-problemtrash.component.css']
})
export class AdminCasesProblemtrashComponent {
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

  constructor(private http: HttpClient, private titleService: Title){}
  
  bulletPusher(bullet: string[], bulletNumber: string){
    for(let i = 0; i < 3; i++){
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

  ngOnInit(): void{
    this.http.get<any[]>('http://localhost:80/problemtrash')
    .subscribe(problem_trash =>{
      this.problem_trash = problem_trash;

      this.header = this.problem_trash[0].header;
      this.header_desc = this.problem_trash[0].header_description;
      this.header_title = this.problem_trash[0].title;

      //Cases
      this.casePusher(this.case1, "1");
      this.casePusher(this.case2, "2");
      this.casePusher(this.case3, "3");
      this.casePusher(this.case4, "4");

      //Bullets
      this.bulletPusher(this.bullet1, "1");
      this.bulletPusher(this.bullet2, "2");
      this.bulletPusher(this.bullet3, "3");
      this.bulletPusher(this.bullet4, "4");
      this.bulletPusher(this.bullet5, "5");
      this.bulletPusher(this.bullet6, "6");

      //References
      this.referencePusher(this.references);

      console.log(this.references);

    })

    this.titleService.setTitle(this.title);
  }

  editing_header: boolean = false;
  editing_header_desc: boolean = false;

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
    this.editing_header_desc = true;
  }
  finishEditingHeaderDescription(event: any) {
    this.editing_header_desc = false;
    this.header_desc = event.target.value;
  }
}
