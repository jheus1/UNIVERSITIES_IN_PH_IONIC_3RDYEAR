import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegrosO9Page } from './negros-o9.page';

const routes: Routes = [
  {
    path: '',
    component: NegrosO9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NegrosO9PageRoutingModule {}
