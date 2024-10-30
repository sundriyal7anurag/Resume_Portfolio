import { Component, Input, OnInit } from '@angular/core';
import { listObj } from 'src/app/constants/constantsStructure';

@Component({
  selector: 'app-list-style',
  templateUrl: './list-style.component.html',
  styleUrls: ['./list-style.component.scss'],
})
export class ListStyleComponent implements OnInit {

  @Input() listData!: Array<listObj>;


  constructor() {}

  ngOnInit(): void {
    console.log("listData=",this.listData)
  }
}
