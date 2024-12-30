import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OcccidentalM3Page } from './occcidental-m3.page';

const routes: Routes = [
  {
    path: '',
    component: OcccidentalM3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OcccidentalM3PageRoutingModule {}
