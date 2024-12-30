import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarinduquePage } from './marinduque.page';

const routes: Routes = [
  {
    path: '',
    component: MarinduquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarinduquePageRoutingModule {}
