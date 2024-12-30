import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Isabela8Page } from './isabela8.page';

const routes: Routes = [
  {
    path: '',
    component: Isabela8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Isabela8PageRoutingModule {}
