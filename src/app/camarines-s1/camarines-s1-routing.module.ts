import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamarinesS1Page } from './camarines-s1.page';

const routes: Routes = [
  {
    path: '',
    component: CamarinesS1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamarinesS1PageRoutingModule {}
