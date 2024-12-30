import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisamisOriental5Page } from './misamis-oriental5.page';

const routes: Routes = [
  {
    path: '',
    component: MisamisOriental5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisamisOriental5PageRoutingModule {}
