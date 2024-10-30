import { Component, OnInit } from '@angular/core';
import { listObj, skillExperienceObj } from '../constants/constantsStructure';
import { skillExperienceData, skillsHeader } from '../constants/constantsData';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillsHeaderData: string= skillsHeader
  mySkillExperienceData: Array<listObj> = skillExperienceData
  constructor() { }

  ngOnInit(): void {
  }

}
