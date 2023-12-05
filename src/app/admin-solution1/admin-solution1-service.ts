import { Injectable, ElementRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment'

@Injectable({
        providedIn: 'root'
})

export class AdminSolution1Service {

        private urlAPI = `${environment.apiUrl}admin-solution-1`;
        private baseUrlAPI = `${environment.apiUrl}`;

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

        solution1ImageUpload(image: FormData, fileInput: ElementRef): void{
                this.http.post(`${this.baseUrlAPI}image-solution1-upload`, image, { responseType: 'text' as 'json'}).subscribe(
                        (res) =>{
                                fileInput.nativeElement.value = '';
                        },(err) =>{
                                console.error(err);
                        }
                )
        }



}