import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-respondingtoclimatechange',
  templateUrl: './respondingtoclimatechange.component.html',
  styleUrls: ['./respondingtoclimatechange.component.css']
})
export class RespondingtoclimatechangeComponent {
  responding_climate_change: any;
  title = "Ecotopia: Responding to Climate Change";

  constructor(private http: HttpClient,
    private titleService: Title){ }

    ngOnInit(): void{
      this.http.get<any[]>('http://localhost:80/respondingtoclimatechange')
      .subscribe(incoming_data => {
        this.responding_climate_change = incoming_data;

      });

      this.titleService.setTitle(this.title);
    }
}
