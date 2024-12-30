import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisamisOriental7Page } from './misamis-oriental7.page';

const routes: Routes = [
  {
    path: '',
    component: MisamisOriental7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisamisOriental7PageRoutingModule {}
