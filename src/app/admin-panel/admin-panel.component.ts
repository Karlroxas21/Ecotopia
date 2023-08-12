import { Component } from '@angular/core';


interface NavItem {
  text: string;
  icon: string;
  children?: NavItem[];
  showChildren?: boolean;
}
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {
  isCollapsed = false;

  
  navItems: NavItem[] = [
    { text: 'Current Issues', icon: 'bx-file' },
    { text: 'Overview of Climate Change', icon: 'bx-search' },
    { text: 'Assessment', icon: 'bx-edit' },

    //Cases
    { text: 'Case 1', icon: 'bx-trash' },
    { text: 'Case 2', icon: 'bx-bus' },
    { text: 'Case 3', icon: 'bx-question-mark' },
    { text: 'Case 4', icon: 'bxs-magic-wand' },

    //Solutions
    { text: 'Solution 1', icon: 'bx-check-shield' },
    { text: 'Solution 2', icon: 'bx-check-shield' },
    { text: 'Solution 3', icon: 'bx-check-shield' },
    { text: 'Solution 4', icon: 'bx-check-shield' },
    
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

  logout() {
  }
}
