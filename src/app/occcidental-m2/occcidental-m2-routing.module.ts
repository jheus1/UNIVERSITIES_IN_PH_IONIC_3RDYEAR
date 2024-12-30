import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OcccidentalM2Page } from './occcidental-m2.page';

const routes: Routes = [
  {
    path: '',
    component: OcccidentalM2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OcccidentalM2PageRoutingModule {}
