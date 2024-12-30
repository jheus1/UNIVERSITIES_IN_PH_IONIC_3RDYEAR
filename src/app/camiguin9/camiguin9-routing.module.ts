import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Camiguin9Page } from './camiguin9.page';

const routes: Routes = [
  {
    path: '',
    component: Camiguin9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Camiguin9PageRoutingModule {}
