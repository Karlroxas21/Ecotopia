import { ElementRef, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment'

@Injectable({
        providedIn:'root'
})

export class AdminService{

        private urlAPI = `${environment.apiUrl}admin-cases`;
        private baseUrlAPI = `${environment.apiUrl}`;

        constructor(private http: HttpClient){}

        getData(): Observable<any>{
                return this.http.get<any>(this.urlAPI);
        }

        updateData(data:any): Observable<any>{
                const _id = data._id;
                const json = {
                        header: data.header,
                        header_description: data.header_description,
                        title: data.title,
                        cases: data.cases,
                }
                return this.http.put<any>(`${this.urlAPI}/${_id}`, json);
        }

        imageCasesUpload(image: FormData, fileInput: ElementRef): void{
                this.http.post(`${this.baseUrlAPI}image-cases-upload`, image, { responseType: 'text' as 'json'}).subscribe(
                        (res) =>{
                                fileInput.nativeElement.value = '';
                        },(err) =>{
                                console.error(err);
                        }
                )
        }

}