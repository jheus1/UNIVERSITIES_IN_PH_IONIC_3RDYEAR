import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SultanKudarat8Page } from './sultan-kudarat8.page';

const routes: Routes = [
  {
    path: '',
    component: SultanKudarat8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SultanKudarat8PageRoutingModule {}
