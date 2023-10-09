import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
        providedIn: 'root'
})

export class AdminAssessmentService {

        private urlAPI = "admin-assessment";

        constructor(private http: HttpClient) { }

        getData(): Observable<any> {
                return this.http.get<any>(this.urlAPI);
        }

        updateData(data: any): Observable<any> {
                const _id = data._id;
                const json = {
                        trivia_game: data.trivia_game,
                        pop_quiz: data.pop_quiz
                }
                return this.http.put<any>(`${this.urlAPI}/${_id}`, json);
        }
}