import { Component } from '@angular/core';
import { sideNavfullObj } from './constants/constantsStructure';
import { sideNavData } from './constants/constantsData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-Portfolio-Resume';
  mySideNavDataData: sideNavfullObj = sideNavData
}
