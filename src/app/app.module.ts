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
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ToastrModule } from 'ngx-toastr';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CasesComponent } from './problems/cases.component';
import { OverviewOfClimateChangeComponent } from './overview-of-climate-change/overview-of-climate-change.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { ExploreComponent } from './explore/explore.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HistoryComponent } from './history/history.component';
import { WebtoonComponent } from './webtoon/webtoon.component';
import { InteractivevideoComponent } from './interactivevideo/interactivevideo.component';
import { MaterialComponent } from './material/material.component';
import { WhyshouldwetakeactionComponent } from './whyshouldwetakeaction/whyshouldwetakeaction.component';
import { OthersolutionsComponent } from './othersolutions/othersolutions.component';
import { RespondingtoclimatechangeComponent } from './respondingtoclimatechange/respondingtoclimatechange.component';
import { GovernmentresourcesComponent } from './governmentresources/governmentresources.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminCase2Component } from './admin-case2/admin-case2.component';
import { AdminCase1Component } from './admin-case1/admin-case1.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminCasesComponent } from './admin-cases/admin-cases.component';
import { AdminCase3Component } from './admin-case3/admin-case3.component';
import { AdminCase4Component } from './admin-case4/admin-case4.component';
import { AdminSolution1Component } from './admin-solution1/admin-solution1.component';
import { AdminSolution2Component } from './admin-solution2/admin-solution2.component';
import { AdminSolution3Component } from './admin-solution3/admin-solution3.component';
import { AdminCurrentIssuesPhComponent } from './admin-current-issues-ph/admin-current-issues-ph.component';
import { AdminSolutionsComponent } from './admin-solutions/admin-solutions.component';
import { LoginComponent } from './login/login.component';
import { AdminAssessmentComponent } from './admin-assessment/admin-assessment.component';
import { Case1Component } from './case1/case1.component';
import { Case2Component } from './case2/case2.component';
import { Case3Component } from './case3/case3.component';
import { Case4Component } from './case4/case4.component';
import { PolicyComponent } from './policy/policy.component';
import { CausesComponent } from './causes/causes.component';
import { EffectsComponent } from './effects/effects.component';
import { EvidenceComponent } from './evidence/evidence.component';
import { LandingPageNewComponent } from './landing-page-new/landing-page-new.component';
import { AdminNewsComponent } from './admin-news/admin-news.component';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    EscapeRoomComponent,
    NewsFeaturesComponent,
    FooterComponent,
    HomeComponent,
    CasesComponent,
    CurrentIssueComponent,
    LandingPageComponent,
    OverviewOfClimateChangeComponent,
    SolutionsComponent,
    ExploreComponent,
    AboutusComponent,
    HistoryComponent,
    WebtoonComponent,
    InteractivevideoComponent,
    MaterialComponent,
    WhyshouldwetakeactionComponent,
    OthersolutionsComponent,
    RespondingtoclimatechangeComponent,
    GovernmentresourcesComponent,
    AssessmentComponent,
    AdminCase2Component,
    AdminCase1Component,
    AdminPanelComponent,
    AdminCasesComponent,
    AdminCase3Component,
    AdminCase4Component,
    AdminSolution1Component,
    AdminSolution2Component,
    AdminSolution3Component,
    AdminCurrentIssuesPhComponent,
    AdminSolutionsComponent,
    LoginComponent,
    AdminAssessmentComponent,
    Case1Component,
    Case2Component,
    Case3Component,
    Case4Component,
    PolicyComponent,
    CausesComponent,
    EffectsComponent,
    EvidenceComponent,
    LandingPageNewComponent,
    AdminNewsComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    // BsDatepickerModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
