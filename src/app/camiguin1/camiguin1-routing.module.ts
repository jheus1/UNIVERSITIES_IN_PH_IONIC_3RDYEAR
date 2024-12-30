import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Camiguin1Page } from './camiguin1.page';

const routes: Routes = [
  {
    path: '',
    component: Camiguin1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Camiguin1PageRoutingModule {}
