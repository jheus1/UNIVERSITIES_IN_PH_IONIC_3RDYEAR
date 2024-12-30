import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarikinaPage } from './marikina.page';

const routes: Routes = [
  {
    path: '',
    component: MarikinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarikinaPageRoutingModule {}
