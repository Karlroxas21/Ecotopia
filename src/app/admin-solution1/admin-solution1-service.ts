import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
        providedIn: 'root'
})

export class AdminSolution1Service {

        private urlAPI = "http://localhost:80/admin-solution-1";

        constructor(private http: HttpClient) { }

        getData(): Observable<any> {
                return this.http.get<any>(this.urlAPI);
        }

        updateData(data: any): Observable<any> {
                const _id = data._id;
                const json = {
                        header: data.header,
                        header_description: data.header_description,
                        bullets: data.bullets,
                        descriptions: data.descriptions,
                        references: data.references
                }
                return this.http.put<any>(`${this.urlAPI}/${_id}`, json);
        }


}