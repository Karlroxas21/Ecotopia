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
        3,
        'sea_level_rise_coastal_erosion');

      // sea_level_rise_coastal_erosion_2
      this.arrayPusher(
        this.sea_level_rise_coastal_erosion_2,
        8,
        'sea_level_rise_coastal_erosion_2'); 

      // biodiversity_ecosystem_loss
      this.arrayPusher(
        this.biodiversity_ecosystem_loss,
        9,
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

  updateData(): void {
    if (this.isAnyChanges()) {
     // Validate input fields
    if (
      !this.isValidInputArray(this.sea_level_rise_coastal_erosion) ||
      !this.isValidInputArray(this.sea_level_rise_coastal_erosion_2) ||
      !this.isValidInputArray(this.biodiversity_ecosystem_loss) ||
      !this.isValidInputArray(this.health_risk) ||
      !this.isValidInputArray(this.water_scarcity) ||
      !this.isValidInputArray(this.ocean_acidification) ||
      !this.isValidInputArray(this.references) 
      ) {
        console.log(!this.isValidInputArray(this.sea_level_rise_coastal_erosion));
        console.log(!this.isValidInputArray(this.sea_level_rise_coastal_erosion_2));
        console.log(!this.isValidInputArray(this.biodiversity_ecosystem_loss));
        console.log(!this.isValidInputArray(this.health_risk));
        console.log(!this.isValidInputArray(this.water_scarcity));
        console.log(!this.isValidInputArray(this.ocean_acidification));
        console.log(!this.isValidInputArray(this.references));
        // Validation failed, do not proceed with the update
        this.toastr.error('One or more input fields are empty or contain only blank spaces. Please fill them out and try again.', 'Validation Error');
        return;
      }
      
      // Sanitize input before sending
      const sanitizedSeaLevelErosion = this.sanitizeArray(this.sea_level_rise_coastal_erosion);
      const sanitizedSeaLevelErosion2 = this.sanitizeArray(this.sea_level_rise_coastal_erosion_2);
      const sanitizedBiodiversityLoss = this.sanitizeArray(this.biodiversity_ecosystem_loss);
      const sanitizedFoodSecurity = this.sanitizeArray(this.agriculture_food_security);
      const sanitizedHealthRisk = this.sanitizeArray(this.health_risk);
      const sanitizedWaterScarcity = this.sanitizeArray(this.water_scarcity);
      const sanitizedOceanAcidification = this.sanitizeArray(this.ocean_acidification);
      const sanitizedReferences = this.sanitizeArray(this.references);

  
      // Check if any of the inputs failed validation
      if (
        sanitizedSeaLevelErosion === null ||
        sanitizedSeaLevelErosion2 === null ||
        sanitizedBiodiversityLoss === null ||
        sanitizedFoodSecurity === null ||
        sanitizedHealthRisk === null ||
        sanitizedWaterScarcity === null ||
        sanitizedOceanAcidification === null ||
        sanitizedReferences === null

      ) {
        // Validation failed, do not proceed with the update
        this.toastr.error('Invalid characters detected in one or more input fields. Please remove them and try again.', 'Validation Error');
        return;
      }
  
      // Create a sanitized copy of the data
      const sanitizedData = { ...this.current_issue_ph[0] };
      sanitizedData.sea_level_rise_coastal_erosion = sanitizedSeaLevelErosion;
      sanitizedData.sea_level_rise_coastal_erosion_2 = sanitizedSeaLevelErosion2;
      sanitizedData.biodiversity_ecosystem_loss = sanitizedBiodiversityLoss;
      sanitizedData.agriculture_food_security = sanitizedFoodSecurity;
      sanitizedData.health_risk = sanitizedHealthRisk;
      sanitizedData.water_scarcity = sanitizedWaterScarcity;
      sanitizedData.ocean_acidification = sanitizedOceanAcidification;
      sanitizedData.references = sanitizedReferences;

     // Update sanitized references
     this.references = sanitizedReferences;
  
      this.AdminCurrentIssueService.updateData(sanitizedData).subscribe(
        (updatedItem) => {
          this.router.navigate(['/admin-current-issues-ph']);
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

  sanitizeArray (input: string[]): string[] | null{
    const harmfulChars = /[\<\>\\\[\]\{\}\=\&\*\#\@\$\^\|\`\~]/g;
    const sanitizedInput: string[] = [];

    for(const str of input){
      // Check if the string array contains harmful chars
      if(harmfulChars.test(str)){

        return null;
      }

      sanitizedInput.push(str);
    }

    return sanitizedInput;
  }

  // Helper function to validate a single input
  isValidInput(input: string): boolean {
    return input.trim() !== ''; // Check if the input is not empty or contains only space
  }
  
  // Helper function to validate an array of inputs
  isValidInputArray(inputArray: string[]): boolean {
    return inputArray.every(input => this.isValidInput(input));
  } 

  // Track if there is any changes made
  isAnyChanges(){
    return this.isThereAnyChanges;
  }

  // End of main function and methods

  // End of main function and method

  ngOnInit(): void{

    this.getData();

    this.titleService.setTitle(this.title);
  }

  editing_sea_level_rise_coastal_erosion: boolean [] = [false, false, false, false];

  editing_sea_level_rise_coastal_erosion_2: boolean [] = [false, false, false, false, false, false, false];

  editing_biodiversity_ecosystem_loss: boolean [] = [false, false, false, false, false, false, false, false, false];

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
