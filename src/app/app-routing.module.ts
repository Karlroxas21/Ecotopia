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
import { InteractivevideoComponent } from './interactivevideo/interactivevideo.component';;
import { WhyshouldwetakeactionComponent } from './whyshouldwetakeaction/whyshouldwetakeaction.component';
import { OthersolutionsComponent } from './othersolutions/othersolutions.component';
import { RespondingtoclimatechangeComponent } from './respondingtoclimatechange/respondingtoclimatechange.component';
import { GovernmentresourcesComponent } from './governmentresources/governmentresources.component';;
import { AssessmentComponent } from './assessment/assessment.component';
import { MaterialComponent } from './material/material.component';
import { LoginComponent } from './login/login.component';
import { PolicyComponent } from './policy/policy.component';

// Cases
import { Case1Component } from './case1/case1.component';
import { Case2Component } from './case2/case2.component';
import { Case3Component } from './case3/case3.component';
import { Case4Component } from './case4/case4.component';

// Admin components
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminCasesComponent } from './admin-cases/admin-cases.component';
import { AdminCase1Component } from './admin-case1/admin-case1.component';
import { AdminCase2Component } from './admin-case2/admin-case2.component';
import { AdminCase3Component } from './admin-case3/admin-case3.component';
import { AdminCase4Component } from './admin-case4/admin-case4.component';
import { AdminSolution1Component } from './admin-solution1/admin-solution1.component';
import { AdminSolution2Component } from './admin-solution2/admin-solution2.component';
import { AdminSolution3Component } from './admin-solution3/admin-solution3.component';
// Solution 4
import { AdminSolutionsComponent } from './admin-solutions/admin-solutions.component';
import { AdminCurrentIssuesPhComponent } from './admin-current-issues-ph/admin-current-issues-ph.component';
import { AdminAssessmentComponent } from './admin-assessment/admin-assessment.component';

// News
import { AdminNewsComponent } from './admin-news/admin-news.component';

// Auth Guard
import { AuthGuard } from './auth.guard';
import { EvidenceComponent } from './evidence/evidence.component';
import { CausesComponent } from './causes/causes.component';
import { EffectsComponent } from './effects/effects.component';

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
  {component: WhyshouldwetakeactionComponent, path: 'whyshouldwetakeactions'},
  {component: RespondingtoclimatechangeComponent, path: 'respondingtoclimatechange'},
  {component: OthersolutionsComponent, path: 'othersolutions'},
  {component: GovernmentresourcesComponent, path: 'governmentresources'},
  {component: AssessmentComponent, path: 'assessment'},
  {component: MaterialComponent, path: 'material'},
  {component: LoginComponent, path: 'login'},
  {component: PolicyComponent, path: 'privacypolicy'},
  {component: EvidenceComponent, path: 'evidence'},
  {component: CausesComponent, path: 'cause'},
  {component: EffectsComponent, path: 'effect'},
  

  // Cases
  {component: Case1Component, path: 'case1'},
  {component: Case2Component, path: 'case2'},
  {component: Case3Component, path: 'case3'},
  {component: Case4Component, path: 'case4'},
  // Admin Components
  {component: AdminCasesComponent, path: 'admin-cases', canActivate: [AuthGuard]},
  {component: AdminCase1Component, path: 'admin-case-1', canActivate: [AuthGuard]},
  {component: AdminCase2Component, path: 'admin-case-2', canActivate: [AuthGuard]},
  {component: AdminCase3Component, path: 'admin-case-3', canActivate: [AuthGuard]},
  {component: AdminCase4Component, path: 'admin-case-4', canActivate: [AuthGuard]},
  {component: AdminPanelComponent, path: 'adminpanel', canActivate: [AuthGuard]},
  {component: AdminCasesComponent, path: 'admin-cases', canActivate: [AuthGuard]},
  {component: AdminSolution1Component, path: 'admin-solution-1', canActivate: [AuthGuard]},
  {component: AdminSolution2Component, path: 'admin-solution-2', canActivate: [AuthGuard]},
  {component: AdminSolution3Component, path: 'admin-solution-3', canActivate: [AuthGuard]},
  // Solution 4
  {component: AdminSolutionsComponent, path: 'admin-solutions', canActivate: [AuthGuard]},
  {component: AdminCurrentIssuesPhComponent, path: 'admin-current-issues-ph', canActivate: [AuthGuard]},
  {component: AdminAssessmentComponent, path: 'admin-assessment', canActivate: [AuthGuard]},
  {component: AdminNewsComponent, path:'admin-news', canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
