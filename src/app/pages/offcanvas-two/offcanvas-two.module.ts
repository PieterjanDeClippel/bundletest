import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffcanvasTwoRoutingModule } from './offcanvas-two-routing.module';
import { OffcanvasTwoComponent } from './offcanvas-two.component';
import { BsOffcanvasModule } from '../../components/bs-offcanvas/bs-offcanvas.module';

@NgModule({
  declarations: [
    OffcanvasTwoComponent
  ],
  imports: [
    CommonModule,
    BsOffcanvasModule,
    OffcanvasTwoRoutingModule
  ]
})
export class OffcanvasTwoModule { }
