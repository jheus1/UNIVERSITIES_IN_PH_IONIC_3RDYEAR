import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SultanKudarat9Page } from './sultan-kudarat9.page';

const routes: Routes = [
  {
    path: '',
    component: SultanKudarat9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SultanKudarat9PageRoutingModule {}
