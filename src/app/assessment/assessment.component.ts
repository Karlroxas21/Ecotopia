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

  ngOnInit(): void{
    this.http.get<any[]>('http://localhost:80/assessment_trivia')
    .subscribe(incoming_data => {
      this.assessment = incoming_data;

    });

    this.titleService.setTitle(this.title);

  }

  showPrompt: boolean = false;
  showPrompt2: boolean = false;
  showPrompt3: boolean = false;

  submitTriviaGame(){
    const unansweredQuestion = this.selectedAnswersTriviaGame.every(answer => answer == undefined || answer == null);
    
    if (unansweredQuestion) {
      this.showPrompt2 = true;
      this.toastr.error('Please answer all questions before submitting.');
    } else {
      // All questions are answered, proceed with submission
      this.showPrompt3 = false;
      this.toastr.success('Submitted!');
    }
  }

  submitPopQuiz(){
    // Check if any question is unanswered
    const unansweredQuestion = this.selectedAnswersPopQuiz.every(answer => answer == undefined || answer == null);
    
    if (unansweredQuestion) {
      this.showPrompt2 = true;
      this.toastr.error('Please answer all questions before submitting.');
    } else {
      // All questions are answered, proceed with submission
      this.showPrompt3 = false;
      this.toastr.success('Submitted!');
    }
  }
}

