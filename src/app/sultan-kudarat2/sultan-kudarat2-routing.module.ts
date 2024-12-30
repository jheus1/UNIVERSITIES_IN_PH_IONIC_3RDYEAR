import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SultanKudarat2Page } from './sultan-kudarat2.page';

const routes: Routes = [
  {
    path: '',
    component: SultanKudarat2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SultanKudarat2PageRoutingModule {}
