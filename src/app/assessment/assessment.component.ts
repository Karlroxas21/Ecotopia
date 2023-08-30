import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { empty, timeout } from 'rxjs';
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

  activeToasts: any[] = []; // Store active toasts

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

  checkAnswerTriviaGame() {
    let score_trivia_game = 0;
    for (const item of this.assessment) {
      for (let i = 0; i < 10; i++) {
        if (item.trivia_game[i].correct_answer === this.selectedAnswersTriviaGame[i]) {
          score_trivia_game += 1;
        }
      }
    }
    setTimeout(() => {
      this.activeToasts.forEach(toast => this.toastr.clear(toast.toastId)); // Clear active toasts
      const toast = this.toastr.success(`Your score: ${score_trivia_game}`, 'Trivia Game Result', {
        timeOut: 5000
      });
      this.activeToasts.push(toast); // Store the toast to clear later
    }, 3000);
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
    setTimeout(() => {
      this.activeToasts.forEach(toast => this.toastr.clear(toast.toastId)); // Clear active toasts
      const toast = this.toastr.success(`Your score: ${score_pop_quiz}`, 'Pop Quiz Result', {
        timeOut: 5000
      });
      this.activeToasts.push(toast); // Store the toast to clear later
    }, 3000);
  }

  submitTriviaGame() {
    // Check if any question is unanswered
    const unansweredQuestion = this.selectedAnswersTriviaGame.every(answer => answer == undefined || answer == null);

    if (unansweredQuestion) {
      this.showPrompt = true;
      this.toastr.error('Please answer all questions before submitting.');
    } else {
      // All questions are answered, proceed with submission
      this.showPrompt = false;
      this.toastr.success('Submitted!');

      this.checkAnswerTriviaGame();
    }
  }

  resetSelectedAnswersTrivia() {
    this.selectedAnswersTriviaGame.fill('');

    this.selectedAnswersTriviaGame = []; // Reset selected answers
    this.selectedAnswersPopQuiz = []; // Reset selected answers
    this.activeToasts.forEach(toast => this.toastr.clear(toast.toastId)); // Clear active toasts

    this.toastr.info('Your responses have been reset.', '');
  }

  submitPopQuiz() {
    // Check if any question is unanswered
    const unansweredQuestion = this.selectedAnswersPopQuiz.every(answer => answer == undefined || answer == null);

    if (unansweredQuestion) {
      this.showPrompt = true;
      this.toastr.error('Please answer all questions before submitting.');
    } else {
      // All questions are answered, proceed with submission
      this.showPrompt = false;
      this.toastr.success('Submitted!');

      this.checkAnswerPopQuiz();
    }
  }
    resetSelectedAnswersPop(){
      this.selectedAnswersPopQuiz.fill('');

      this.selectedAnswersTriviaGame = []; // Reset selected answers
      this.selectedAnswersPopQuiz = []; // Reset selected answers
      this.activeToasts.forEach(toast => this.toastr.clear(toast.toastId)); // Clear active toasts

      this.toastr.info('Your responses have been reset.', '');
    }
}
