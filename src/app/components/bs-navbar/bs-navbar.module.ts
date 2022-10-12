import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';



@NgModule({
  declarations: [
    BsNavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BsNavbarComponent
  ]
})
export class BsNavbarModule { }
