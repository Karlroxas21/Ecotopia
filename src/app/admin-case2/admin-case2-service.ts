import { ElementRef, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment'

@Injectable({
        providedIn: 'root'
})

export class AdminCase2Service{

        private urlAPI = `${environment.apiUrl}admin-case-2`;
        private baseUrlAPI = `${environment.apiUrl}`;

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
                        indicator_1: data.indicator_1,
                        indicator_2: data.indicator_2,
                        indicator_3: data.indicator_3,
                        indicator_4: data.indicator_4,
                        indicator_5: data.indicator_5,
                        references: data.references,
                }
                return this.http.put<any>(`${this.urlAPI}/${_id}`, json)
        }

         // Image upload
         imageCase2Upload(image: FormData, fileInput: ElementRef): void{
                this.http.post(`${this.baseUrlAPI}image-case2-upload`, image, { responseType: 'text' as 'json'}).subscribe(
                        (res) =>{
                                fileInput.nativeElement.value = '';
                        },(err) =>{
                                console.error(err);
                        }
                )
        }
}