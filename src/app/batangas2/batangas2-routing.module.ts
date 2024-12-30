import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Batangas2Page } from './batangas2.page';

const routes: Routes = [
  {
    path: '',
    component: Batangas2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Batangas2PageRoutingModule {}
