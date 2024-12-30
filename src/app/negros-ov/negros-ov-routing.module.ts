import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegrosOvPage } from './negros-ov.page';

const routes: Routes = [
  {
    path: '',
    component: NegrosOvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NegrosOvPageRoutingModule {}
