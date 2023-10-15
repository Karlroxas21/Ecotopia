import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { environment } from '../../environments/environment'

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
      this.http.get<any[]>(`${environment.apiUrl}respondingtoclimatechange`)
      .subscribe(incoming_data => {
        this.responding_climate_change = incoming_data;

      });

      this.titleService.setTitle(this.title);
    }
}
