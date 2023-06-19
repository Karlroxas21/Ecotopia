import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCasesComponent } from '../admin-cases/admin-cases.component';
import { AdminInteractivevideoComponent } from '../admin-interactivevideo/admin-interactivevideo.component';
import { AdminWebtoonComponent } from '../admin-webtoon/admin-webtoon.component';
import { AdminSolutionsComponent } from '../admin-solutions/admin-solutions.component';
import { AdminHomeComponent } from '../admin-home/admin-home.component';

const routes: Routes = [
  {component: AdminCasesComponent, path: 'admin-cases'},
  {component: AdminInteractivevideoComponent, path: 'admin-interactivevideo'},
  {component: AdminWebtoonComponent, path: 'admin-webtoon'},
  {component: AdminSolutionsComponent, path: 'admin-solutions'},
  {component: AdminHomeComponent, path: 'admin-home'},
  {path:'', redirectTo: 'home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
