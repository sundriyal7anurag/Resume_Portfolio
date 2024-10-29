import { Component, OnInit } from '@angular/core';
import { aboutData, aboutHeader } from '../constants/constantsData';
import { textbody } from '../constants/constantsStructure';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutHeaderData:string=aboutHeader
  myAboutData: textbody= aboutData
  
  constructor() { }

  ngOnInit(): void {
  }

}
