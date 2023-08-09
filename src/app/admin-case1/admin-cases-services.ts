import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
        providedIn: 'root'
})

export class AdminCasesService{

        private urlAPI = "http://localhost:80/admin-cases-problemtrash";

        constructor(private http: HttpClient){}

        getData(): Observable<any>{
                return this.http.get<any>(this.urlAPI);
        }

        updateData(data: any): Observable<any>{
                const _id = data._id;
                const json = {
                        header: data.header,
                        header_description: data.header_description,
                        title: data.title,
                        cases: data.cases,
                        bullets: data.bullets,
                        references: data.references
                }
                return this.http.put<any>(`${this.urlAPI}/${_id}`, json);
        }
}