import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsOffcanvasComponent } from './bs-offcanvas/bs-offcanvas.component';



@NgModule({
  declarations: [
    BsOffcanvasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // Necessary?
    BsOffcanvasComponent
  ]
})
export class BsOffcanvasModule { }
