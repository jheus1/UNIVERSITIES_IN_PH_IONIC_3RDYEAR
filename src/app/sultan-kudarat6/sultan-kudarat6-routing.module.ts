import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SultanKudarat6Page } from './sultan-kudarat6.page';

const routes: Routes = [
  {
    path: '',
    component: SultanKudarat6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SultanKudarat6PageRoutingModule {}
