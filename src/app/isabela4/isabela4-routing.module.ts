import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Isabela4Page } from './isabela4.page';

const routes: Routes = [
  {
    path: '',
    component: Isabela4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Isabela4PageRoutingModule {}
