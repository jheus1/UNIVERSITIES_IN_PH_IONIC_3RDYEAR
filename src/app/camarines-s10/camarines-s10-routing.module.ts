import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamarinesS10Page } from './camarines-s10.page';

const routes: Routes = [
  {
    path: '',
    component: CamarinesS10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamarinesS10PageRoutingModule {}
