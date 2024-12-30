import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisamisOriental1Page } from './misamis-oriental1.page';

const routes: Routes = [
  {
    path: '',
    component: MisamisOriental1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisamisOriental1PageRoutingModule {}
