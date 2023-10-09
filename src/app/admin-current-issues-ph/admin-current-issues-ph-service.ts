import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
        providedIn: 'root'
})

export class AdminCurrentIssueService {
        private urlAPI = "/admin-current-issues-ph";

        constructor(private http: HttpClient){}

        getData(): Observable<any>{
                return this.http.get<any>(this.urlAPI);
        }
        
        updateData(data: any): Observable<any>{
                const _id = data._id;
                const json = {
                        sea_level_rise_coastal_erosion: data.sea_level_rise_coastal_erosion,
                        sea_level_rise_coastal_erosion_2: data.sea_level_rise_coastal_erosion_2,
                        biodiversity_ecosystem_loss: data.biodiversity_ecosystem_loss,
                        agriculture_food_security: data.agriculture_food_security,
                        health_risk: data.health_risk,
                        water_scarcity: data.water_scarcity,
                        ocean_acidification: data.ocean_acidification,
                        references: data.references
                }
                return this.http.put<any>(`${this.urlAPI}/${_id}`, json);
        }
}