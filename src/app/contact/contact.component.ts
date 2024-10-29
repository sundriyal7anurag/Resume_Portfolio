import { Component, OnInit } from '@angular/core';
import { contactData, contactusHeader } from '../constants/constantsData';
import { contactObj } from '../constants/constantsStructure';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactHeaderData: string= contactusHeader
  myContactData: Array<contactObj>= contactData
  
  constructor() { }

  ngOnInit(): void {
  }

}
