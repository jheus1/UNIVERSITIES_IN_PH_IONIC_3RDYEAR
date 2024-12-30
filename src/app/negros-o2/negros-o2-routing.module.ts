import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegrosO2Page } from './negros-o2.page';

const routes: Routes = [
  {
    path: '',
    component: NegrosO2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NegrosO2PageRoutingModule {}
