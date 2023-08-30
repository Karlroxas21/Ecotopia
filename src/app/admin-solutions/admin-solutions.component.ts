import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { AdminSolutionsService } from './admin-solutions-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-solutions',
  templateUrl: './admin-solutions.component.html',
  styleUrls: ['./admin-solutions.component.css']
})
export class AdminSolutionsComponent {
  solutions: any;
  title = "Admin: Solutions";

  solution_1: string [] = [];
  solution_2: string [] = [];
  solution_3: string [] = [];
  solution_4: string [] = [];

  isThereAnyChanges: boolean = false;

  constructor(private http: HttpClient,
    private titleService: Title,
    private AdminSolutionsService: AdminSolutionsService,
    private router: Router,
    private toastr: ToastrService) { }
  
  // Main methods
  arrayPusher(refArray: string[], size: number, property: string){
    for(let i = 0; i < size; i++){
      const propertyName = property;
      refArray.push(this.solutions[0][propertyName][i]);
    }
  }

  getData(): void{
    this.AdminSolutionsService.getData().subscribe(incoming_data => {
      this.solutions = incoming_data;

      // Solution 1
      this.arrayPusher(
        this.solution_1,
        2,
        'solution_1'
      );

      // Solution 2
      this.arrayPusher(
        this.solution_2,
        2,
        'solution_2'
      );

      // Solution 3
      this.arrayPusher(
        this.solution_3,
        2,
        'solution_3'
      );

      // Solution 4
      this.arrayPusher(
        this.solution_4,
        2,
        'solution_4'
      );
    })
  }

  updateData(): void{
    if(this.isAnyChanges()){
      this.AdminSolutionsService.updateData(this.solutions[0]).subscribe(updatedData => {
        this.router.navigate(['/admin-solutions']);

        this.toastr.success('Data updated successfully.', 'Success');
        // console.log('Update success', updatedData);
      }, (err) => {
        this.toastr.error('Error updating item.', 'Error');
        // console.error('Error updating item. ', err);
      })
      this.isThereAnyChanges = false
    }else{
      this.toastr.info('No changes were made.', 'Info');
        // console.log('You did not make any changes');
    }
  }

  // Track changes
  isAnyChanges(){
    return this.isThereAnyChanges;
  }

  // End of main methods

  ngOnInit(): void{

    this.getData();

    this.titleService.setTitle(this.title);
  }

  editing_solution_1: boolean [] = [false, false];
  
  editing_solution_2: boolean [] = [false, false];

  editing_solution_3: boolean [] = [false, false];

  editing_solution_4: boolean [] = [false, false];

  doesChange(){
    this.isThereAnyChanges = true;
  }

  // Solution 1
  startEditingSolution1(index: number){
    this.editing_solution_1[index] = true;
  }

  finishEditingSolution1(index: number, event: any){
    this.editing_solution_1[index] = false;
    this.solution_1[index] = event.target.value;
  }

  // Solution 2
  startEditingSolution2(index: number){
    this.editing_solution_2[index] = true;
  }

  finishEditingSolution2(index: number, event: any){
    this.editing_solution_2[index] = false;
    this.solution_2[index] = event.target.value;
  }

  // Solution 3
  startEditingSolution3(index: number){
    this.editing_solution_3[index] = true;
  }

  finishEditingSolution3(index: number, event: any){
    this.editing_solution_3[index] = false;
    this.solution_3[index] = event.target.value;
  }

  // Solution 4
  startEditingSolution4(index: number){
    this.editing_solution_4[index] = true;
  }

  finishEditingSolution4(index: number, event: any){
    this.editing_solution_4[index] = false;
    this.solution_4[index] = event.target.value;
  }
}
