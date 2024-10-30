import { Component, OnInit } from '@angular/core';
import { listObj } from '../constants/constantsStructure';
import { experienceData, experienceHeader } from '../constants/constantsData';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  listData: Array<listObj>= experienceData;
  experienceHeaderData: string= experienceHeader
  constructor() { }

  ngOnInit(): void {
  }

}
