import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisamisOriental4Page } from './misamis-oriental4.page';

const routes: Routes = [
  {
    path: '',
    component: MisamisOriental4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisamisOriental4PageRoutingModule {}
