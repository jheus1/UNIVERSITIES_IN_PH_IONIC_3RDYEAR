import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NorthernS10Page } from './northern-s10.page';

const routes: Routes = [
  {
    path: '',
    component: NorthernS10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NorthernS10PageRoutingModule {}
