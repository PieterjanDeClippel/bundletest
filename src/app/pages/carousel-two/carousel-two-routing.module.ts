import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselTwoComponent } from './carousel-two.component';

const routes: Routes = [{ path: '', component: CarouselTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarouselTwoRoutingModule { }
