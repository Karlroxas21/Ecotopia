import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { empty } from 'rxjs';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent {
  assessment: any;
 
  title = "Ecotopia: Assessment";
 
  selectedAnswersTriviaGame: string[] = []; // Selected answer will store here. Index 0 = Question 1, Index 9 = Question 10.

  selectedAnswersPopQuiz: string[] = [];

  constructor(private http: HttpClient,
    private titleService: Title) { }

  ngOnInit(): void{
    this.http.get<any[]>('http://localhost:80/assessment_trivia')
    .subscribe(incoming_data => {
      this.assessment = incoming_data;

    });

    this.titleService.setTitle(this.title);

  }

  submitTriviaGame(){
    // Add validation if all questions is answered.
    console.log('selected answers', this.selectedAnswersTriviaGame);
  }

  submitPopQuiz(){
    // Add validation if all questions is answered.
    console.log('selected answers', this.selectedAnswersPopQuiz);
  }

}
