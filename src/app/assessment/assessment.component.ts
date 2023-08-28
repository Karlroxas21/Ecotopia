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

  checkAnswerTriviaGame(){
    let score_trivia_game = 0;
    for(const item of this.assessment){
      for(let i = 0; i < 10; i++){
        if(item.trivia_game[i].correct_answer === this.selectedAnswersTriviaGame[i]){
          score_trivia_game += 1;
        }
        
      }
    }
    // Insert toaster here that shows your score.
    console.log(score_trivia_game); // Remove this if deploying
  }

  checkAnswerPopQuiz(){
    let score_pop_quiz = 0;
    for(const item of this.assessment){
      for(let i = 0; i < 10; i++){
        if(item.pop_quiz[i].correct_answer === this.selectedAnswersPopQuiz[i]){
          score_pop_quiz += 1;
        }
      }
    }
    // Insert toaster here that shows your score.
    console.log(score_pop_quiz); // Remove this if deploying
  }

  submitTriviaGame(){
    // Add validation if all questions is answered.
    console.log('selected answers', this.selectedAnswersTriviaGame); // Remove this if deploying

    this.checkAnswerTriviaGame();
    
  }

  resetSelectedAnswersTrivia(){
    this.selectedAnswersTriviaGame.fill('');

    // Insert toaster here that shows you reset the trivia game.
    console.log(this.selectedAnswersTriviaGame); // Remove this if deploying
  }

  submitPopQuiz(){
    // Add validation if all questions is answered.
    console.log('selected answers', this.selectedAnswersPopQuiz); // Remove this if deploying

    this.checkAnswerPopQuiz();
  }

  resetSelectedAnswersPop(){
    this.selectedAnswersPopQuiz.fill('');

    // Insert toaster here that shows you reset the pop quiz.
    console.log(this.selectedAnswersPopQuiz); // Remove this if deploying
  }

}
