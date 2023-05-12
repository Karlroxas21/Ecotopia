import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CausesComponent } from './causes/causes.component';
import { CurrentIssueComponent } from './current-issue/current-issue.component';
import { EscapeRoomComponent } from './games/escape-room/escape-room.component';
import { NewsFeaturesComponent } from './news-features/news-features.component';
import { CasesComponent } from './problems/cases.component';
import { TakeactionComponent } from './takeaction/takeaction.component';
import { OverviewOfClimateChangeComponent } from './overview-of-climate-change/overview-of-climate-change.component';

const routes: Routes = [
  {component: LandingPageComponent, path: ''},
  {component: CausesComponent, path: 'causes'},
  {component: CurrentIssueComponent, path: 'currentIssue'},
  {component: CurrentIssueComponent, path: 'effects'},
  {component: EscapeRoomComponent, path: 'games'},
  {component: NewsFeaturesComponent, path: 'newsFeatures'},
  {component: CasesComponent, path: 'problems'},
  {component: TakeactionComponent, path: 'takeAction'},
  {component: OverviewOfClimateChangeComponent, path: 'overviewOfClimateChange'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
