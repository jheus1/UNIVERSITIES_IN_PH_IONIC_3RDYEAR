import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NorthernSPage } from './northern-s.page';

const routes: Routes = [
  {
    path: '',
    component: NorthernSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NorthernSPageRoutingModule {}
