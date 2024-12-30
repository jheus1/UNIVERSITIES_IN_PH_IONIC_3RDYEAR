import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegrosO8Page } from './negros-o8.page';

const routes: Routes = [
  {
    path: '',
    component: NegrosO8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NegrosO8PageRoutingModule {}
