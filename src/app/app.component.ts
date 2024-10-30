import { Component } from '@angular/core';
import { sideNavfullObj } from './constants/constantsStructure';
import { sideNavData } from './constants/constantsData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mySideNavData: sideNavfullObj = sideNavData
  isSidebarCollapsed = false;

  onSidebarCollapsed(collapsed: boolean): void {
    this.isSidebarCollapsed = collapsed;
    console.log("isSidebarCollapsed=",this.isSidebarCollapsed)
  }
}
