import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurigaoDelsurPage } from './surigao-delsur.page';

const routes: Routes = [
  {
    path: '',
    component: SurigaoDelsurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurigaoDelsurPageRoutingModule {}
