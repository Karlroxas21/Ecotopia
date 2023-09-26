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

  incorrectAnswersTriviaGame: string[] = [];
  correctAnswersTriviaGame: string[] = [];

  incorrectAnswersPopQuiz: string[] = [];
  correctAnswersPopQuiz: string[] = [];

  scoreTriviaGame: number = 0;
  scorePopQuiz: number = 0;

  showPrompt: boolean = false;
  submittedTriviaGame: boolean = false;
  submittedPopQuiz: boolean = false;

  constructor(private http: HttpClient,
    private titleService: Title,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:80/assessment_trivia')
      .subscribe(incoming_data => {
        this.assessment = incoming_data;

        this.correctAnswersTriviaGame = incoming_data.map(item => item.trivia_game.map((quiz: { correct_answer: any; }) => quiz.correct_answer));
        this.correctAnswersPopQuiz = incoming_data.map(item => item.pop_quiz.map((quiz: { correct_answer: any; }) => quiz.correct_answer));
      });

    this.titleService.setTitle(this.title);
  }

  checkAnswerTriviaGame() {
    // Calculate the score, incorrect answers, and correct answers
    let score_trivia_game = 0;
    const incorrectAnswersTriviaGame: string[] = [];
    const correctAnswersTriviaGame: string[] = [];

    for (const item of this.assessment) {
      for (let i = 0; i < 10; i++) {
        if (item.trivia_game[i].correct_answer === this.selectedAnswersTriviaGame[i]) {
          score_trivia_game += 1;
        }
      }
    }

    // Store the score
    this.scoreTriviaGame = score_trivia_game;
    
    // Set the submitted flag to true after submission
    this.submittedTriviaGame = true;

    setTimeout(() => {
      this.activeToasts.forEach(toast => this.toastr.clear(toast.toastId));
  
      let message = `Your score: ${score_trivia_game}`;
      if (incorrectAnswersTriviaGame.length > 0) {
        message += `. Incorrect Answers: ${incorrectAnswersTriviaGame.join(', ')}`;
      }
      if (correctAnswersTriviaGame.length > 0) {
        message += `. Correct Answers: ${correctAnswersTriviaGame.join(', ')}`;
      }
  
      const toast = this.toastr.success(message, 'Trivia Game Result', {
        timeOut: 5000
      });
      this.activeToasts.push(toast);
    }, 3000);
  }

  checkAnswerPopQuiz() {
    let score_pop_quiz = 0;
    const incorrectAnswersPopQuiz: string[] = [];
    const correctAnswersPopQuiz: string[] = []; 
    
    for (const item of this.assessment) {
      for (let i = 0; i < 10; i++) {
        if (item.pop_quiz[i].correct_answer === this.selectedAnswersPopQuiz[i]) {
          score_pop_quiz += 1;
        }
      }
    }

    this.scorePopQuiz = score_pop_quiz;
    this.incorrectAnswersPopQuiz = incorrectAnswersPopQuiz;
    this.correctAnswersPopQuiz = correctAnswersPopQuiz;

    // Store the score
    this.scorePopQuiz = score_pop_quiz;
    
    // Set the submitted flag to true after submission
    this.submittedPopQuiz = true;
    
    setTimeout(() => {
      this.activeToasts.forEach(toast => this.toastr.clear(toast.toastId));
  
      let message = `Your score: ${score_pop_quiz}`;
      if (incorrectAnswersPopQuiz.length > 0) {
        message += `. Incorrect Answers: ${incorrectAnswersPopQuiz.join(', ')}`;
      }
      if (correctAnswersPopQuiz.length > 0) {
        message += `. Correct Answers: ${correctAnswersPopQuiz.join(', ')}`;
      }
  
      const toast = this.toastr.success(message, 'Pop Quiz Result', {
        timeOut: 5000
      });
      this.activeToasts.push(toast);
    }, 3000);
  }

  submitTriviaGame() {
    // Check if any question is unanswered
    const unansweredQuestion = this.selectedAnswersTriviaGame.every(answer => answer == undefined || answer == null);

    if (unansweredQuestion) {
      this.toastr.error('Please answer all questions before submitting.');
    } else {
      this.toastr.success('Submitted!');
      this.checkAnswerTriviaGame();
    }
  }

  resetSelectedAnswersTrivia() {
    this.selectedAnswersTriviaGame = Array(10).fill('');

    this.scoreTriviaGame = 0;
    this.incorrectAnswersTriviaGame = [];
    this.correctAnswersTriviaGame = [];
    this.submittedTriviaGame = false;

    this.selectedAnswersTriviaGame = []; // Reset selected answers
    this.selectedAnswersPopQuiz = []; // Reset selected answers
    this.activeToasts.forEach(toast => this.toastr.clear(toast.toastId)); // Clear active toasts
    this.correctAnswersTriviaGame = [];

    this.toastr.info('Your responses have been reset.', '');
  }

  submitPopQuiz() {
    // Check if any question is unanswered
    const unansweredQuestion = this.selectedAnswersPopQuiz.every(answer => answer == undefined || answer == null);

    if (unansweredQuestion) {
      this.showPrompt = true;
      this.toastr.error('Please answer all questions before submitting.');
    } else {
      this.toastr.success('Submitted!');
      this.checkAnswerPopQuiz();
    }
  }

    resetSelectedAnswersPop(){
      this.selectedAnswersPopQuiz = Array(10).fill('');

      this.scorePopQuiz = 0;
      this.incorrectAnswersPopQuiz = [];
      this.correctAnswersPopQuiz = [];
      this.submittedPopQuiz = false;

      this.selectedAnswersPopQuiz = []; // Reset selected answers
      this.activeToasts.forEach(toast => this.toastr.clear(toast.toastId)); // Clear active toasts

      this.toastr.info('Your responses have been reset.', '');
    }
}
