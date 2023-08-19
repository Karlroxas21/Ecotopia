import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-whyshouldwetakeaction',
  templateUrl: './whyshouldwetakeaction.component.html',
  styleUrls: ['./whyshouldwetakeaction.component.css']
})
export class WhyshouldwetakeactionComponent implements OnInit {
  y_should_we_take_action: any;
  title = "Ecotopia: Why Should We Take Action";

  constructor(private http: HttpClient,
    private titleService: Title) { }

  ngOnInit(): void{
    this.http.get<any[]>('http://localhost:80/whyshouldwetakeactions')
    .subscribe(incoming_data =>{
      this.y_should_we_take_action = incoming_data;

      console.log(this.y_should_we_take_action)
    });

    this.titleService.setTitle(this.title);
  }

}
