import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Camiguin4Page } from './camiguin4.page';

const routes: Routes = [
  {
    path: '',
    component: Camiguin4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Camiguin4PageRoutingModule {}
