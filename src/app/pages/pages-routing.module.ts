import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [{ path: '', component: PagesComponent }, { path: 'carousel/one', loadChildren: () => import('./carousel-one/carousel-one.module').then(m => m.CarouselOneModule) }, { path: 'carousel/two', loadChildren: () => import('./carousel-two/carousel-two.module').then(m => m.CarouselTwoModule) }, { path: 'offcanvas/one', loadChildren: () => import('./offcanvas-one/offcanvas-one.module').then(m => m.OffcanvasOneModule) }, { path: 'offcanvas/two', loadChildren: () => import('./offcanvas-two/offcanvas-two.module').then(m => m.OffcanvasTwoModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
