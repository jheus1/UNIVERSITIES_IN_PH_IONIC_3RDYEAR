import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cagayan2Page } from './cagayan2.page';

const routes: Routes = [
  {
    path: '',
    component: Cagayan2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cagayan2PageRoutingModule {}
