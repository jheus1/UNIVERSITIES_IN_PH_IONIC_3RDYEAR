import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegrosO6Page } from './negros-o6.page';

const routes: Routes = [
  {
    path: '',
    component: NegrosO6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NegrosO6PageRoutingModule {}
