import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SultanKudarat10Page } from './sultan-kudarat10.page';

const routes: Routes = [
  {
    path: '',
    component: SultanKudarat10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SultanKudarat10PageRoutingModule {}
