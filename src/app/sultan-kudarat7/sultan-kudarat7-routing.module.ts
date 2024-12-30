import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SultanKudarat7Page } from './sultan-kudarat7.page';

const routes: Routes = [
  {
    path: '',
    component: SultanKudarat7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SultanKudarat7PageRoutingModule {}
