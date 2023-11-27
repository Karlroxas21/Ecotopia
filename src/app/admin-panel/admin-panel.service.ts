import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
        providedIn: 'root'
})

export class AdminPanelService{

        private urlAPI = `${environment.apiUrl}admin-account-create`;

        constructor(private http: HttpClient){}

        getAccounts(): Observable<any>{
                return this.http.get<any>(this.urlAPI);
        }

}