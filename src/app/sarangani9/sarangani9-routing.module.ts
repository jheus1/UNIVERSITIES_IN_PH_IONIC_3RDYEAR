import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sarangani9Page } from './sarangani9.page';

const routes: Routes = [
  {
    path: '',
    component: Sarangani9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sarangani9PageRoutingModule {}
