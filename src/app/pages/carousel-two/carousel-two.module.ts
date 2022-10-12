import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselTwoRoutingModule } from './carousel-two-routing.module';
import { CarouselTwoComponent } from './carousel-two.component';
import { BsCarouselModule } from '../../components/bs-carousel/bs-carousel.module';


@NgModule({
  declarations: [
    CarouselTwoComponent
  ],
  imports: [
    CommonModule,
    BsCarouselModule,
    CarouselTwoRoutingModule
  ]
})
export class CarouselTwoModule { }
