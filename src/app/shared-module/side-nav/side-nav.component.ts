import { Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import { sideNavfullObj } from 'src/app/constants/constantsStructure';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  @Input() sideNavData!: sideNavfullObj;
  @Output() collapsedChange = new EventEmitter<boolean>(); // Output to notify parent of collapse state
  isCollapsed: boolean = false;
  mobileBreakpoint = 768; // Define the breakpoint for small screens

  constructor() {}

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  // Check screen size and set collapse state
  checkScreenSize(): void {
    this.isCollapsed = window.innerWidth < this.mobileBreakpoint;
    this.collapsedChange.emit(this.isCollapsed); // Emit the collapse state
  }

  // Toggle collapse state manually
  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
    this.collapsedChange.emit(this.isCollapsed); // Emit the collapse state
  }
}
