import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SultanKudarat3Page } from './sultan-kudarat3.page';

const routes: Routes = [
  {
    path: '',
    component: SultanKudarat3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SultanKudarat3PageRoutingModule {}
