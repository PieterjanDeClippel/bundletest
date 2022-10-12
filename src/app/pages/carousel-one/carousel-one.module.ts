import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselOneRoutingModule } from './carousel-one-routing.module';
import { CarouselOneComponent } from './carousel-one.component';
import { BsCarouselModule } from '../../components/bs-carousel/bs-carousel.module';


@NgModule({
  declarations: [
    CarouselOneComponent
  ],
  imports: [
    CommonModule,
    BsCarouselModule,
    CarouselOneRoutingModule
  ]
})
export class CarouselOneModule { }
