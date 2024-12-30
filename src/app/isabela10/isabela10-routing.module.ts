import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Isabela10Page } from './isabela10.page';

const routes: Routes = [
  {
    path: '',
    component: Isabela10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Isabela10PageRoutingModule {}
