import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Isabela7Page } from './isabela7.page';

const routes: Routes = [
  {
    path: '',
    component: Isabela7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Isabela7PageRoutingModule {}
