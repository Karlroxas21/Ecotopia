import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCasesComponent } from '../admin-cases/admin-cases.component';
import { AdminCase1Component } from '../admin-case1/admin-case1.component';
import { AdminCase2Component } from '../admin-case2/admin-case2.component';
import { AdminCase3Component } from '../admin-case3/admin-case3.component';
import { AdminCase4Component } from '../admin-case4/admin-case4.component';
import { AdminSolution1Component } from '../admin-solution1/admin-solution1.component';
import { AdminSolution2Component } from '../admin-solution2/admin-solution2.component';
import { AdminSolution3Component } from '../admin-solution3/admin-solution3.component';
import { AdminSolutionsComponent } from '../admin-solutions/admin-solutions.component';
import { AdminCurrentIssuesPhComponent } from '../admin-current-issues-ph/admin-current-issues-ph.component';
import { Router } from '@angular/router';

const routes: Routes = [
  {component: AdminCasesComponent, path: 'admin-cases'},
  {component: AdminCase1Component, path: 'admin-case-1'},
  {component: AdminCase2Component, path: 'admin-case-2'},
  {component: AdminCase3Component, path: 'admin-case-3'},
  {component: AdminCase4Component, path: 'admin-case-4'},
  {component: AdminCasesComponent, path: 'admin-cases'},
  {component: AdminSolution1Component, path: 'admin-solution-1'},
  {component: AdminSolution2Component, path: 'admin-solution-2'},
  {component: AdminSolution3Component, path: 'admin-solution-3'},
  {component: AdminSolutionsComponent, path: 'admin-solutions'},
  {component: AdminCurrentIssuesPhComponent, path: 'admin-current-issues-ph'}
]

interface NavItem {
  text: string;
  icon: string;
  children?: NavItem[];
  showChildren?: boolean;
  route?: String;
}

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})

export class AdminPanelComponent {
  isCollapsed = true;

  constructor(private router: Router){}
  
  navItems: NavItem[] = [
    { text: 'Current Issues', icon: 'bx-file', route: '/admin-current-issues-ph'},
    { text: 'Assessment', icon: 'bx-edit', route: '/admin-assessment' },

    //Cases
    { text: 'Cases' , icon: 'bx-briefcase-alt', route: '/admin-cases'},
    { text: 'Case 1', icon: 'bx-trash', route: '/admin-case-1'},
    { text: 'Case 2', icon: 'bx-bus', route: '/admin-case-2' },
    { text: 'Case 3', icon: 'bx-question-mark', route: '/admin-case-3' },
    { text: 'Case 4', icon: 'bxs-magic-wand', route: '/admin-case-4' },

    //Solutions
    { text: 'Solutions', icon: 'bx-check-shield', route: '/admin-solutions'},
    { text: 'Solution 1', icon: 'bx-check-shield', route: '/admin-solution-1'},
    { text: 'Solution 2', icon: 'bx-check-shield', route: '/admin-solution-2' },
    { text: 'Solution 3', icon: 'bx-check-shield', route: '/admin-solution-3' }
    
    // { text: 'Cases', icon: 'bx-file',
    //   children: [
    //     { text: 'Case 1', icon: 'bx-file'},
    //     { text: 'Case 2', icon: 'bx-file' },
    //     { text: 'Case 3', icon: 'bx-file' },
    //     { text: 'Case 4', icon: 'bx-file' }
    //   ]
    // },

    // {
    //   text: 'Solutions', icon: 'bx-check-shield',
    //   children: [
    //     { text: 'Solution 1', icon: 'bx-check-shield'},
    //     { text: 'Solution 2', icon: 'bx-check-shield' },
    //     { text: 'Solution 3', icon: 'bx-check-shield' },
    //     { text: 'Solution 4', icon: 'bx-check-shield' }
    //   ]
    // },
  ];

  toggleSidebar(){
    this.isCollapsed = !this.isCollapsed;
  }

  toggleDropdown(item: NavItem) {
    item.showChildren = !item.showChildren;
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
