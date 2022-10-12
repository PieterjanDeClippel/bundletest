import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselOneComponent } from './carousel-one.component';

const routes: Routes = [{ path: '', component: CarouselOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarouselOneRoutingModule { }
