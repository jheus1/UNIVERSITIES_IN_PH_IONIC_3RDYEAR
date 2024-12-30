import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamarinesN5Page } from './camarines-n5.page';

const routes: Routes = [
  {
    path: '',
    component: CamarinesN5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamarinesN5PageRoutingModule {}
