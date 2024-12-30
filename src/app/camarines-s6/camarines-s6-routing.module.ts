import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamarinesS6Page } from './camarines-s6.page';

const routes: Routes = [
  {
    path: '',
    component: CamarinesS6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamarinesS6PageRoutingModule {}
