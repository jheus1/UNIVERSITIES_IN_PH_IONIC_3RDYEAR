import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamarinesS5Page } from './camarines-s5.page';

const routes: Routes = [
  {
    path: '',
    component: CamarinesS5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamarinesS5PageRoutingModule {}
