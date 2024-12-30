import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Camiguin8Page } from './camiguin8.page';

const routes: Routes = [
  {
    path: '',
    component: Camiguin8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Camiguin8PageRoutingModule {}
