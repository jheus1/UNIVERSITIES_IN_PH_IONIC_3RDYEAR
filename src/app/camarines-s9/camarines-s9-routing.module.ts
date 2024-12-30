import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamarinesS9Page } from './camarines-s9.page';

const routes: Routes = [
  {
    path: '',
    component: CamarinesS9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamarinesS9PageRoutingModule {}
