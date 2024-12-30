import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamarinesS7Page } from './camarines-s7.page';

const routes: Routes = [
  {
    path: '',
    component: CamarinesS7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamarinesS7PageRoutingModule {}
