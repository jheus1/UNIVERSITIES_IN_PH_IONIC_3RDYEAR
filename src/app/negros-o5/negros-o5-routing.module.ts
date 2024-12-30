import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegrosO5Page } from './negros-o5.page';

const routes: Routes = [
  {
    path: '',
    component: NegrosO5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NegrosO5PageRoutingModule {}
