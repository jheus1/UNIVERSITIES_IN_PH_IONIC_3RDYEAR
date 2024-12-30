import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Isabela6Page } from './isabela6.page';

const routes: Routes = [
  {
    path: '',
    component: Isabela6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Isabela6PageRoutingModule {}
