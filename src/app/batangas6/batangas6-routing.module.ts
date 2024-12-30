import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Batangas6Page } from './batangas6.page';

const routes: Routes = [
  {
    path: '',
    component: Batangas6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Batangas6PageRoutingModule {}
