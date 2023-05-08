import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EscapeRoomComponent } from './games/escape-room/escape-room.component';
import { NewsFeaturesComponent } from './news-features/news-features.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CurrentIssueComponent } from './current-issue/current-issue.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgxImageComparisonSliderModule } from 'ngx-image-comparison-slider';
import { CasesComponent } from './problems/cases.component';
import { CausesComponent } from './causes/causes.component';
import { EffectsComponent } from './effects/effects.component';
import { TakeactionComponent } from './takeaction/takeaction.component';

@NgModule({
  declarations: [
    AppComponent,
    EscapeRoomComponent,
    NewsFeaturesComponent,
    FooterComponent,
    HomeComponent,
    CasesComponent,
    CausesComponent,
    EffectsComponent,
    TakeactionComponent,
    CurrentIssueComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    AccordionModule.forRoot(),
    NgxImageComparisonSliderModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
