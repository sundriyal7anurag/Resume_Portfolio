import { Component, OnInit } from '@angular/core';
import { educationDataArr, educationHeader } from '../constants/constantsData';
import { listObj } from '../constants/constantsStructure';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  educationHeaderData: string= educationHeader
  listData: Array<listObj>= educationDataArr;
  constructor() { }

  ngOnInit(): void {
  }

}
