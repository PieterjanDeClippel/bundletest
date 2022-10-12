import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffcanvasOneRoutingModule } from './offcanvas-one-routing.module';
import { OffcanvasOneComponent } from './offcanvas-one.component';
import { BsOffcanvasModule } from '../../components/bs-offcanvas/bs-offcanvas.module';


@NgModule({
  declarations: [
    OffcanvasOneComponent
  ],
  imports: [
    CommonModule,
    BsOffcanvasModule,
    OffcanvasOneRoutingModule
  ]
})
export class OffcanvasOneModule { }
