import { ElementRef, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment'

@Injectable({
        providedIn: 'root'
})

export class AdminSolutionsService {
        private urlAPI = `${environment.apiUrl}admin-solutions`;
        private baseUrlAPI = `${environment.apiUrl}`;

        constructor(private http: HttpClient){ }

        getData(): Observable<any>{
                return this.http.get<any>(this.urlAPI);
        }
        
        updateData(data: any): Observable<any>{
                const _id = data._id;
                const json = {
                        solution_1: data.solution_1,
                        solution_2: data.solution_2,
                        solution_3: data.solution_3,
                        solution_4: data.solution_4,
                }
                return this.http.put<any>(`${this.urlAPI}/${_id}`, json);
        }

        solutionUpload(image: FormData, fileInput: ElementRef): void{
                this.http.post(`${this.baseUrlAPI}image-solution-upload`, image, { responseType: 'text' as 'json'}).subscribe(
                        (res) =>{
                                fileInput.nativeElement.value = '';
                        },(err) =>{
                                console.error(err);
                        }
                )
        }

}