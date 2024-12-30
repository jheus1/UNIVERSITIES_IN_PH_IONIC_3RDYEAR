import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Isabela2Page } from './isabela2.page';

const routes: Routes = [
  {
    path: '',
    component: Isabela2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Isabela2PageRoutingModule {}
