import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
        providedIn: 'root'
})

export class AdminNewsService{
        private urlAPI = `${environment.apiUrl}news_features`;

        constructor(private http: HttpClient){}

        getData(): Observable<any>{
                return this.http.get<any>(this.urlAPI);
        }

        updateDataById(data: any): Observable<any>{

                const newsId = data._id;
                return this.http.put<any>(`${this.urlAPI}/${newsId}`, data);
        }

        addData(data: any): Observable<any>{
                return this.http.post<any>(this.urlAPI, data);
        }

        deleteData(data: any): Observable<any>{

                const newsId = data._id;
                return this.http.delete<any>(`${this.urlAPI}/${newsId}`);
        }
}