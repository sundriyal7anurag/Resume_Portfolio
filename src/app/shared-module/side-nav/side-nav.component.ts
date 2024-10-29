import { Component, Input, OnInit } from '@angular/core';
import { sideNavfullObj } from 'src/app/constants/constantsStructure';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Input() sideNavData!: sideNavfullObj;
  constructor() { }

  ngOnInit(): void {
  }

}
