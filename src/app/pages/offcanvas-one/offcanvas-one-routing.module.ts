import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffcanvasOneComponent } from './offcanvas-one.component';

const routes: Routes = [{ path: '', component: OffcanvasOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffcanvasOneRoutingModule { }
