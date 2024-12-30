import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Isabela9Page } from './isabela9.page';

const routes: Routes = [
  {
    path: '',
    component: Isabela9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Isabela9PageRoutingModule {}
