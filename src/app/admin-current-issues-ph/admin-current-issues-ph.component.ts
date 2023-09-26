import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { AdminCurrentIssueService } from './admin-current-issues-ph-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-current-issues-ph',
  templateUrl: './admin-current-issues-ph.component.html',
  styleUrls: ['./admin-current-issues-ph.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 5000, noPause: true, showIndicators: true } }
  ]
})
export class AdminCurrentIssuesPhComponent {
  isFirstOpen = true;
  oneAtATime = true;

  current_issue_ph: any;
  title = "Admin: Current Issue in the Philippines";

  sea_level_rise_coastal_erosion: string [] = [];
  sea_level_rise_coastal_erosion_2: string [] = [];
  biodiversity_ecosystem_loss: string [] = [];
  agriculture_food_security: string [] = [];
  health_risk: string [] = [];
  water_scarcity: string [] = [];
  ocean_acidification: string[] = [];
  references: string [] = [];

  isThereAnyChanges: boolean = false;

  constructor(private http: HttpClient,
    private titleService: Title,
    private AdminCurrentIssueService: AdminCurrentIssueService,
    private router: Router,
    private toastr: ToastrService) { }

  // Main method and functions here
  arrayPusher(refArray: string[], size: number, property: string){
    for(let i = 0; i < size; i++){
      const propertyName = property
      refArray.push(this.current_issue_ph[0][propertyName][i]);
    }
  }

  getData(): void{
    this.AdminCurrentIssueService.getData().subscribe(incoming_data =>{
      this.current_issue_ph = incoming_data;

      // sea_level_rise_coastal_erosion
      this.arrayPusher(
        this.sea_level_rise_coastal_erosion,
        4,
        'sea_level_rise_coastal_erosion');

      // sea_level_rise_coastal_erosion_2
      this.arrayPusher(
        this.sea_level_rise_coastal_erosion_2,
        9,
        'sea_level_rise_coastal_erosion_2'); 

      // biodiversity_ecosystem_loss
      this.arrayPusher(
        this.biodiversity_ecosystem_loss,
        10,
        'biodiversity_ecosystem_loss');   

      // agriculture_food_security
      this.arrayPusher(
        this.agriculture_food_security,
        16,
        'agriculture_food_security'); 

      // health_risk
      this.arrayPusher(
        this.health_risk,
        6,
        'health_risk');

      // water_scarcity
      this.arrayPusher(
        this.water_scarcity,
        12,
        'water_scarcity');

      // ocean acidification
      this.arrayPusher(
        this.ocean_acidification,
        11,
        'ocean_acidification'
      )
      // references
      this.arrayPusher(
        this.references,
        16,
        'references'); 
    })
  }

  updateData(): void{
    if(this.isAnyChanges()){
      this.AdminCurrentIssueService.updateData(this.current_issue_ph[0]).subscribe(updatedData =>{
        this.router.navigate(['/admin-current-issues-ph']);

        this.toastr.success('Data updated successfully.', 'Success');
        // console.log('Update success', updatedData);
      }, (err) =>{
        this.toastr.error('Error updating item.', 'Error');
        // console.error("Error updating item. ", err);
      })
      this.isThereAnyChanges = false;
    }else{
      this.toastr.info('No changes were made.', 'Info');
       // console.log("You did not make any changes");
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

  editing_sea_level_rise_coastal_erosion: boolean [] = [false, false, false, false];

  editing_sea_level_rise_coastal_erosion_2: boolean [] = [false, false, false, false, false, false, false, false, false];

  editing_biodiversity_ecosystem_loss: boolean [] = [false, false, false, false, false, false, false, false, false, false];

  editing_agriculture_food_security: boolean [] = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

  editing_health_risk: boolean [] = [false, false, false, false, false, false];

  editing_water_scarcity: boolean [] = [false, false, false, false, false, false, false, false, false, false, false, false];

  editing_ocean_acidification: boolean [] = [false, false, false, false, false, false, false, false, false, false, false];

  editing_references: boolean [] = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]

  // Sea Level Erosion Dynamic 
  startEditingSeaLevelErosion(index: number){
    this.editing_sea_level_rise_coastal_erosion[index] = true;
  }

  finishEditingSeaLevelErosion(index: number, event: any) {
    this.editing_sea_level_rise_coastal_erosion[index] = false;
    this.sea_level_rise_coastal_erosion[index] = event.target.value;
  }

  // Sea Level Erosion 2 Dynamic  
  startEditingSeaLevelErosion2(index: number){
    this.editing_sea_level_rise_coastal_erosion_2[index] = true;
  }

  finishEditingSeaLevelErosion2(index: number, event: any) {
    this.editing_sea_level_rise_coastal_erosion_2[index] = false;
    this.sea_level_rise_coastal_erosion_2[index] = event.target.value;
  }

  // Biodiversity and Ecosystem Loss Dynamic  
  startEditingBiodiversityEcosystemLoss(index: number){
    this.editing_biodiversity_ecosystem_loss[index] = true;
  }

  finishEditingBiodiversityEcosystemLoss(index: number, event: any) {
    this.editing_biodiversity_ecosystem_loss[index] = false;
    this.biodiversity_ecosystem_loss[index] = event.target.value;
  }

  // Agriculture Food Security Dynamic  
  startEditingAgricultureFoodSecurity(index: number){
    this.editing_agriculture_food_security[index] = true;
  }

  finishEditingAgricultureFoodSecurity(index: number, event: any) {
    this.editing_agriculture_food_security[index] = false;
    this.agriculture_food_security[index] = event.target.value;
  }

  // Health Risk Dynamic  
  startEditingHealthRisk(index: number){
    this.editing_health_risk[index] = true;
  }

  finishEditingHealthRisk(index: number, event: any) {
    this.editing_health_risk[index] = false;
    this.health_risk[index] = event.target.value;
  }

  // Water Scarcity Dynamic  
  startEditingWaterScarcity(index: number){
    this.editing_water_scarcity[index] = true;
  }

  finishEditingWaterScarcity(index: number, event: any) {
    this.editing_water_scarcity[index] = false;
    this.water_scarcity[index] = event.target.value;
  }

  // Ocean Acidification Dynamic
  startEditingOceanAcidification(index: number){
    this.editing_ocean_acidification[index] = true;
  }

  finishEditingOceanAcidification(index: number, event: any) {
    this.editing_ocean_acidification[index] = false;
    this.ocean_acidification[index] = event.target.value;
  }

  // References Dynamic  
  startEditingReferences(index: number){
    this.editing_references[index] = true;
  }

  finishEditingReferences(index: number, event: any) {
    this.editing_references[index] = false;
    this.references[index] = event.target.value;
  }
  
  doesChange(){
    this.isThereAnyChanges = true;
  }

}
