import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisamisOriental9Page } from './misamis-oriental9.page';

const routes: Routes = [
  {
    path: '',
    component: MisamisOriental9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisamisOriental9PageRoutingModule {}
