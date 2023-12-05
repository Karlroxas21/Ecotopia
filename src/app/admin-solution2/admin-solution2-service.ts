import { Injectable, ElementRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment'

@Injectable({
        providedIn: 'root'
})

export class AdminSolution2Service {
        
        private urlAPI =  `${environment.apiUrl}admin-solution-2`
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
                        descriptions: data.descriptions,
                        bullets: data.bullets,
                        link: data.links,
                        references: data.references
                }
                return this.http.put<any>(`${this.urlAPI}/${_id}`, json);
        }

        solution2ImageUpload(image: FormData, fileInput: ElementRef): void{
                this.http.post(`${this.baseUrlAPI}image-solution2-upload`, image, { responseType: 'text' as 'json'}).subscribe(
                        (res) =>{
                                fileInput.nativeElement.value = '';
                        },(err) =>{
                                console.error(err);
                        }
                )
        }
}