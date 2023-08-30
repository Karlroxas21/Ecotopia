import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { empty } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
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
    private titleService: Title,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:80/assessment_trivia')
      .subscribe(incoming_data => {
        this.assessment = incoming_data;

      });

    this.titleService.setTitle(this.title);

  }


  showPrompt: boolean = false;
  showPrompt2: boolean = false;
  showPrompt3: boolean = false;

  checkAnswerTriviaGame() {
    let score_trivia_game = 0;
    for (const item of this.assessment) {
      for (let i = 0; i < 10; i++) {
        if (item.trivia_game[i].correct_answer === this.selectedAnswersTriviaGame[i]) {
          score_trivia_game += 1;
        }

      }
    }
    // Insert toaster here that shows your score.
    console.log(score_trivia_game); // Remove this if deploying
  }

  checkAnswerPopQuiz() {
    let score_pop_quiz = 0;
    for (const item of this.assessment) {
      for (let i = 0; i < 10; i++) {
        if (item.pop_quiz[i].correct_answer === this.selectedAnswersPopQuiz[i]) {
          score_pop_quiz += 1;
        }
      }
    }
    // Insert toaster here that shows your score.
    console.log(score_pop_quiz); // Remove this if deploying
  }

  submitTriviaGame() {
    const unansweredQuestion = this.selectedAnswersTriviaGame.every(answer => answer == undefined || answer == null);

    if (unansweredQuestion) {
      this.showPrompt2 = true;
      this.toastr.error('Please answer all questions before submitting.');
    } else {
      // All questions are answered, proceed with submission
      this.showPrompt3 = false;
      this.toastr.success('Submitted!');
    }

    // Add validation if all questions is answered.
    console.log('selected answers', this.selectedAnswersTriviaGame); // Remove this if deploying

    this.checkAnswerTriviaGame();

  }

  resetSelectedAnswersTrivia() {
    this.selectedAnswersTriviaGame.fill('');

    // Insert toaster here that shows you reset the trivia game.
    console.log(this.selectedAnswersTriviaGame); // Remove this if deploying
  }

  submitPopQuiz() {
    // Check if any question is unanswered
    const unansweredQuestion = this.selectedAnswersPopQuiz.every(answer => answer == undefined || answer == null);

    if (unansweredQuestion) {
      this.showPrompt2 = true;
      this.toastr.error('Please answer all questions before submitting.');
    } else {
      // All questions are answered, proceed with submission
      this.showPrompt3 = false;
      this.toastr.success('Submitted!');

      // Add validation if all questions is answered.
      console.log('selected answers', this.selectedAnswersPopQuiz); // Remove this if deploying

      this.checkAnswerPopQuiz();
    }

  }
    resetSelectedAnswersPop(){
      this.selectedAnswersPopQuiz.fill('');

      // Insert toaster here that shows you reset the pop quiz.
      console.log(this.selectedAnswersPopQuiz); // Remove this if deploying

    }


}
