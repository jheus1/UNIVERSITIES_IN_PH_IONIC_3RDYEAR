import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamarinesS8Page } from './camarines-s8.page';

const routes: Routes = [
  {
    path: '',
    component: CamarinesS8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamarinesS8PageRoutingModule {}
