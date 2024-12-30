import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Isabela5Page } from './isabela5.page';

const routes: Routes = [
  {
    path: '',
    component: Isabela5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Isabela5PageRoutingModule {}
