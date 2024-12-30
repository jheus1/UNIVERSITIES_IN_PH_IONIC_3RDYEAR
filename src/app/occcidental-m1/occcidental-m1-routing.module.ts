import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OcccidentalM1Page } from './occcidental-m1.page';

const routes: Routes = [
  {
    path: '',
    component: OcccidentalM1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OcccidentalM1PageRoutingModule {}
