import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsCarouselComponent } from './bs-carousel/bs-carousel.component';



@NgModule({
  declarations: [
    BsCarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // Necessary?
    BsCarouselComponent
  ]
})
export class BsCarouselModule { }
