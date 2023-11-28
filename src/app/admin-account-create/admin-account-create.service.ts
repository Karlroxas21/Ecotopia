import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
        providedIn: 'root'
})

export class AdminAccountCreationService{

        private urlAPI = `${environment.apiUrl}admin-account-create`;

        constructor(private http: HttpClient){}

        getAccounts(): Observable<any>{
                return this.http.get<any>(this.urlAPI);
        }

        getAccount(id: string): Observable<any>{
                return this.http.get<any>(`${this.urlAPI}${id}`);
        }

        createAccount(account: any): Observable<any>{
                return this.http.post<any>(this.urlAPI, account);
        }

        updateAccount(id: string, account: any): Observable<any>{
                return this.http.put<any>(`${this.urlAPI}/${id}`, account);
        }

        deleteAccount(id: string): Observable<void>{
                return this.http.delete<void>(`${this.urlAPI}/${id}`);
        }

        resetPassword(id: string, password: any): Observable<any>{
                return this.http.put<any>(`${this.urlAPI}/reset-password/${id}`, {password: password});
        }

}