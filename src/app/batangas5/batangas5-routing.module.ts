import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Batangas5Page } from './batangas5.page';

const routes: Routes = [
  {
    path: '',
    component: Batangas5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Batangas5PageRoutingModule {}
