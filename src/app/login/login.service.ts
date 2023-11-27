import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
        providedIn: 'root'
})

export class LoginService{

        private urlAPI = `${environment.apiUrl}login`;

        constructor(private http: HttpClient){}

        login(username: string, password: string): Observable<any>{
                return this.http.post(this.urlAPI, {username, password});
        }
}