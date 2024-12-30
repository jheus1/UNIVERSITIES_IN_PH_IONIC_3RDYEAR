import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Isabela1Page } from './isabela1.page';

const routes: Routes = [
  {
    path: '',
    component: Isabela1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Isabela1PageRoutingModule {}
