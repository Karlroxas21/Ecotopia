import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-othersolutions',
  templateUrl: './othersolutions.component.html',
  styleUrls: ['./othersolutions.component.css']
})
export class OthersolutionsComponent {
  other_solutions: any;
  title = "Ecotopia: Other Solutions";

  constructor(private http: HttpClient,
    private titleService: Title) { }

  ngOnInit(): void{
    this.http.get<any[]>('http://localhost:80/othersolutions')
    .subscribe(incoming_data => {
      this.other_solutions = incoming_data;

    });

    this.titleService.setTitle(this.title);
  }
}
