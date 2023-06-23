import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CurrentIssueComponent } from './current-issue/current-issue.component';
import { EscapeRoomComponent } from './games/escape-room/escape-room.component';
import { NewsFeaturesComponent } from './news-features/news-features.component';
import { CasesComponent } from './problems/cases.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { ExploreComponent } from './explore/explore.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OverviewOfClimateChangeComponent } from './overview-of-climate-change/overview-of-climate-change.component';
import { WebtoonComponent } from './webtoon/webtoon.component';
import { InteractivevideoComponent } from './interactivevideo/interactivevideo.component';
// import { ADMINComponent } from './admin/admin.component';
// import { AdminCasesComponent } from './admin-cases/admin-cases.component';
// import { AdminInteractivevideoComponent } from './admin-interactivevideo/admin-interactivevideo.component';
// import { AdminWebtoonComponent } from './admin-webtoon/admin-webtoon.component';
// import { AdminSolutionsComponent } from './admin-solutions/admin-solutions.component';
// import { AdminHomeComponent } from './admin-home/admin-home.component';

const routes: Routes = [
  {component: LandingPageComponent, path: ''},
  {component: CurrentIssueComponent, path: 'currentIssue'},
  {component: CurrentIssueComponent, path: 'effects'},
  {component: EscapeRoomComponent, path: 'games'},
  {component: NewsFeaturesComponent, path: 'newsFeatures'},
  {component: CasesComponent, path: 'problems'},
  {component: SolutionsComponent, path: 'solutions'},
  {component: ExploreComponent, path: 'explore'},
  {component: AboutusComponent, path: 'aboutus'},
  {component: OverviewOfClimateChangeComponent, path: 'overviewOfClimateChange'},
  {component: WebtoonComponent, path: 'webtoon'},
  {component: InteractivevideoComponent, path: 'interactivevideo'},
  // {component: ADMINComponent, path: 'ADMIN'},
  // {component: AdminCasesComponent, path: 'admin-cases'},
  // {component: AdminInteractivevideoComponent, path: 'admin-interactivevideo'},
  // {component: AdminWebtoonComponent, path: 'admin-webtoon'},
  // {component: AdminSolutionsComponent, path: 'admin-solutions'},
  // {component: AdminHomeComponent, path: 'admin-home'},
  // {path:'', redirectTo: 'home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
