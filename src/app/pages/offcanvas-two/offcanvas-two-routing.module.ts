import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffcanvasTwoComponent } from './offcanvas-two.component';

const routes: Routes = [{ path: '', component: OffcanvasTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffcanvasTwoRoutingModule { }
