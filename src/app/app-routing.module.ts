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
import { ProblemtrashComponent } from './problemtrash/problemtrash.component';
import { CausesofclimatechangeComponent } from './causesofclimatechange/causesofclimatechange.component';
import { EffectsofclimatechangeComponent } from './effectsofclimatechange/effectsofclimatechange.component';
import { WhyshouldwetakeactionComponent } from './whyshouldwetakeaction/whyshouldwetakeaction.component';
import { OthersolutionsComponent } from './othersolutions/othersolutions.component';
import { RespondingtoclimatechangeComponent } from './respondingtoclimatechange/respondingtoclimatechange.component';
import { GovernmentresourcesComponent } from './governmentresources/governmentresources.component';
import { ProblemjeepoutdatedengineComponent } from './problemjeepoutdatedengine/problemjeepoutdatedengine.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { MaterialComponent } from './material/material.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

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
  {component: ProblemtrashComponent, path: 'problemtrash'},
  {component: CausesofclimatechangeComponent, path: 'causesofclimatechange'},
  {component: EffectsofclimatechangeComponent, path: 'effectsofclimatechange'},
  {component: WhyshouldwetakeactionComponent, path: 'whyshouldwetakeactions'},
  {component: RespondingtoclimatechangeComponent, path: 'respondingtoclimatechange'},
  {component: OthersolutionsComponent, path: 'othersolutions'},
  {component: GovernmentresourcesComponent, path: 'governmentresources'},
  {component: ProblemjeepoutdatedengineComponent, path: 'outdatedjeepengine'},
  {component: AssessmentComponent, path: 'assessment'},
  {component: MaterialComponent, path: 'material'},
  {component: AdminPanelComponent, path: 'adminpanel'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
