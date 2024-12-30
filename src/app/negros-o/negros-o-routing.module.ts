import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegrosOPage } from './negros-o.page';

const routes: Routes = [
  {
    path: '',
    component: NegrosOPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NegrosOPageRoutingModule {}
