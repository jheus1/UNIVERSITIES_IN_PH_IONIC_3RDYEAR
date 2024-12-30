import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisamisOriental8Page } from './misamis-oriental8.page';

const routes: Routes = [
  {
    path: '',
    component: MisamisOriental8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisamisOriental8PageRoutingModule {}
