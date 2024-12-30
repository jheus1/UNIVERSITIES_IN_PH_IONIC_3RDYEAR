import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OcccidentalMPage } from './occcidental-m.page';

const routes: Routes = [
  {
    path: '',
    component: OcccidentalMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OcccidentalMPageRoutingModule {}
