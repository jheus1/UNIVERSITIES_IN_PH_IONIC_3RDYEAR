import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Marinduque1Page } from './marinduque1.page';

const routes: Routes = [
  {
    path: '',
    component: Marinduque1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Marinduque1PageRoutingModule {}
