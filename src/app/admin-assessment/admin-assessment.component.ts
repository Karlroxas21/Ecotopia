import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { AdminAssessmentService } from './admin-assessment-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-assessment',
  templateUrl: './admin-assessment.component.html',
  styleUrls: ['./admin-assessment.component.css']
})
export class AdminAssessmentComponent {
  assessment: any;
  title = "Admin: Assessment";

  trivia_game: any;
  pop_quiz: any;

  isThereAnyChanges: boolean = false;

  constructor(private http: HttpClient,
    private titleService: Title,
    private AdminAssessmentService: AdminAssessmentService,
    private router: Router,
    private toastr: ToastrService) { }

  // Main methods
  arrayPusher(refArray: string[], size: number, property: string){
    for(let i = 0; i < size; i++){
      const propertyName = property;
      refArray.push(this.assessment[0][propertyName][i]);
    }
  }

  getData(): void{
    this.AdminAssessmentService.getData().subscribe(incoming_data =>{
      this.assessment = incoming_data;

      // Trivia Game
      this.trivia_game = this.assessment[0].trivia_game;

      // Pop Quiz
      this.pop_quiz = this.assessment[0].pop_quiz;

    })
  }

  updateData(): void {
    if (this.isAnyChanges()) {

      !this.isValidInputArray(this.pop_quiz) 

      // Sanitize trivia game and pop quiz data
      const sanitizedTriviaGame = this.sanitizeTriviaGame(this.trivia_game);
      const sanitizedPopQuiz = this.sanitizePopQuiz(this.pop_quiz);
  
      // Check if any of the inputs failed validation
      if (
        sanitizedTriviaGame === null ||
        sanitizedPopQuiz === null
      ) {
        // Validation failed, do not proceed with the update
        this.toastr.error('Invalid characters detected in one or more input fields. Please remove them and try again.', 'Validation Error');
        return;
      }
  
      // Create a sanitized copy of the data
      const sanitizedData = { ...this.assessment[0] };
      this.trivia_game = sanitizedTriviaGame;
      this.pop_quiz = sanitizedPopQuiz;
  
      this.AdminAssessmentService.updateData(sanitizedData).subscribe(
        (updatedItem) => {
          this.router.navigate(['/admin-assessment']);
          console.log(this.assessment[0]);
          this.toastr.success('Data updated successfully.', 'Success');
        },
        (err) => {
          this.toastr.error('Error updating item.', 'Error');
          console.error('Error updating item. ', err);
        }
      );
      this.isThereAnyChanges = false;
    } else {
      this.toastr.info('No changes were made.', 'Info');
    }
  }


 // Helper function to validate an array of inputs
isValidInputArray(inputArray: string[]): boolean {
  return inputArray.every(input => input.trim() !== ''); // Check if all inputs in the array are not empty or contain only spaces
}
  
  // Track if there is any changes made
  isAnyChanges(){
    return this.isThereAnyChanges;
  }

  // End of main function and methods

  sanitizeInput(input: string): string | null {
    const harmfulChars = /[\;\<\>\\\[\]\{\}\=\&\+\*\#\@\$\^\|\~]/g;
  
    // Check if the input contains harmful characters
    if (harmfulChars.test(input)) {
      // Show a toastr error notification
      return null;
    }
    // If no harmful characters are found, return the sanitized input
    return input;
  }

  // Trivia Game Question
  sanitizeTriviaGame(triviaGame: any): any {
    const sanitizedTriviaGame = JSON.parse(JSON.stringify(triviaGame));

    for (let i = 0; i < sanitizedTriviaGame.length; i++) {
      sanitizedTriviaGame[i].property = this.sanitizeInput(sanitizedTriviaGame[i].property);

      if (sanitizedTriviaGame[i].property === null) {
        return null; // Validation failed
      }

      for (let j = 0; j < sanitizedTriviaGame[i].options.length; j++) {
        sanitizedTriviaGame[i].options[j] = this.sanitizeInput(sanitizedTriviaGame[i].options[j]);

        if (sanitizedTriviaGame[i].options[j] === null) {
          return null; // Validation failed
        }
      }

      sanitizedTriviaGame[i].correct_answer = this.sanitizeInput(sanitizedTriviaGame[i].correct_answer);

      if (sanitizedTriviaGame[i].correct_answer === null) {
        return null; // Validation failed
      }
    }

    return sanitizedTriviaGame;
  }

  // Pop Quiz Question
  sanitizePopQuiz(popQuiz: any): any {
    const sanitizedPopQuiz = JSON.parse(JSON.stringify(popQuiz));

    for (let i = 0; i < sanitizedPopQuiz.length; i++) {
      sanitizedPopQuiz[i].property = this.sanitizeInput(sanitizedPopQuiz[i].property);

      if (sanitizedPopQuiz[i].property === null) {
        return null; // Validation failed
      }

      for (let j = 0; j < sanitizedPopQuiz[i].options.length; j++) {
        sanitizedPopQuiz[i].options[j] = this.sanitizeInput(sanitizedPopQuiz[i].options[j]);

        if (sanitizedPopQuiz[i].options[j] === null) {
          return null; // Validation failed
        }
      }

      sanitizedPopQuiz[i].correct_answer = this.sanitizeInput(sanitizedPopQuiz[i].correct_answer);

      if (sanitizedPopQuiz[i].correct_answer === null) {
        return null; // Validation failed
      }
    }

    return sanitizedPopQuiz;
  }

  sanitizeArray(array: string[]): string[] {
    return array.map((item) => {
      const sanitizedItem = this.sanitizeInput(item);
      return sanitizedItem !== null ? sanitizedItem : '';
    });
  }

  ngOnInit(): void{

    this.getData();

    this.titleService.setTitle(this.title);
  }
  
  editing_questions: boolean [] = [false, false, false, false, false, false, false, false, false, false];
  editing_options: boolean [][] = [[false, false, false, false],
                                  [false, false, false, false],
                                  [false, false, false, false],
                                  [false, false, false, false],
                                  [false, false, false, false],
                                  [false, false, false, false],
                                  [false, false, false, false],
                                  [false, false, false, false],
                                  [false, false, false, false],
                                  [false, false, false, false]];

  editing_questions_popquiz: boolean [] = [false, false, false, false, false, false, false, false, false, false];
  editing_options_popquiz: boolean [][] = [[false, false, false, false],
                                  [false, false, false, false],
                                  [false, false, false, false],
                                  [false, false, false, false],
                                  [false, false, false, false],
                                  [false, false, false, false],
                                  [false, false, false, false],
                                  [false, false, false, false],
                                  [false, false, false, false],
                                  [false, false, false, false]];
  
  editing_correct_answer: boolean [] = [false, false, false, false, false, false, false, false, false, false];

  editing_correct_answer_popquiz: boolean [] = [false, false, false, false, false, false, false, false, false, false];

  editing_question(index: number): boolean{
    return this.editing_questions[index];
  }

  startEditingQuestion(index: number): void{
    this.editing_questions[index] = true;
  }

  finishEditingQuestion(event: any, index: number, property: string): void{
    this.trivia_game[index].property = event.target.value;
    this.editing_questions[index] = false;
  }

  // Options
  editing_option(questionIndex: number, optionIndex: number): boolean{
    return this.editing_options[questionIndex][optionIndex];
  }

  startEditingOption(questioIndex: number, optionIndex: number): void{
    this.editing_options[questioIndex][optionIndex] = true;
  }

  finishEditingOption(event: any, questionIndex: number, optionIndex: number): void{
    this.trivia_game[questionIndex].options[optionIndex] = event.target.value;
    this.editing_options[questionIndex][optionIndex] = false;
  }
  
  //  Correct Answer
  editing_correct_answers(index: number): boolean{
    return this.editing_correct_answer[index];
  }

  startEditingCorrectAnswer(index: number): void{
    this.editing_correct_answer[index] = true;
  }

  finishEditingCorrectAnswer(event: any, index: number): void{
    this.trivia_game[index].correct_answer = event.target.value;
    this.editing_correct_answer[index] = false;
  }

  doesChange(){
    
    this.isThereAnyChanges = true;
  }

  // Pop Quiz Question
  editing_question_popquiz(index: number): boolean{
    return this.editing_questions_popquiz[index];
  }

  startEditingQuestionPopQuiz(index: number): void{
    this.editing_questions_popquiz[index] = true;
  }

  finishEditingQuestionPopQuiz(event: any, index: number, property: string): void{
    this.pop_quiz[index].property = event.target.value;
    this.editing_questions_popquiz[index] = false;
  }

  // Pop Quiz Options
  editing_option_popquiz(questionIndex: number, optionIndex: number): boolean{
    return this.editing_options_popquiz[questionIndex][optionIndex];
  }

  startEditingOptionPopQuiz(questioIndex: number, optionIndex: number): void{
    this.editing_options_popquiz[questioIndex][optionIndex] = true;
  }

  finishEditingOptionPopQuiz(event: any, questionIndex: number, optionIndex: number): void{
    this.pop_quiz[questionIndex].options[optionIndex] = event.target.value;
    this.editing_options_popquiz[questionIndex][optionIndex] = false;
  }
  
  //  Pop Quiz Correct Answer
  editing_correct_answers_popquiz(index: number): boolean{
    return this.editing_correct_answer_popquiz[index];
  }

  startEditingCorrectAnswerPopQuiz(index: number): void{
    this.editing_correct_answer_popquiz[index] = true;
  }

  finishEditingCorrectAnswerPopQuiz(event: any, index: number): void{
    this.pop_quiz[index].correct_answer = event.target.value;
    this.editing_correct_answer_popquiz[index] = false;
  }

}
