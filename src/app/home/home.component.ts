import { Component, OnInit } from '@angular/core';

import { homeData, homeHeader } from '../constants/constantsData';
import { textbody } from '../constants/constantsStructure';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


homeHeaderData: string=homeHeader;
myHomeData:textbody= homeData
  constructor() { }

  ngOnInit(): void {
  }

}
