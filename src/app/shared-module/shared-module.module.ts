import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { ListStyleComponent } from './list-style/list-style.component';
import { SectionBodyComponent } from './section-body/section-body.component';



@NgModule({
  declarations: [
    SideNavComponent,
    SectionHeaderComponent,
    ListStyleComponent,
    SectionBodyComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  exports:[SideNavComponent, SectionHeaderComponent, ListStyleComponent, SectionBodyComponent]
})
export class SharedModuleModule { }
