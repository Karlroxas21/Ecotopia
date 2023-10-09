import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
        providedIn: 'root'
})

export class AdminSolutionsService {
        private urlAPI = "http://localhost:80/admin-solutions";

        constructor(private http: HttpClient){ }

        getData(): Observable<any>{
                return this.http.get<any>(this.urlAPI);
        }
        
        updateData(data: any): Observable<any>{
                const _id = data._id;
                const json = {
                        solution_1: data.solution_1,
                        solution_2: data.solution_2,
                        solution_3: data.solution_3,
                        solution_4: data.solution_4,
                }
                return this.http.put<any>(`${this.urlAPI}/${_id}`, json);
        }

}