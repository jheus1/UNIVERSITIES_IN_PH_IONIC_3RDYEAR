import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sarangani10Page } from './sarangani10.page';

const routes: Routes = [
  {
    path: '',
    component: Sarangani10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sarangani10PageRoutingModule {}
