import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgusanDelsurPage } from './agusan-delsur.page';

const routes: Routes = [
  {
    path: '',
    component: AgusanDelsurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgusanDelsurPageRoutingModule {}
