import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quirino1Page } from './quirino1.page';

const routes: Routes = [
  {
    path: '',
    component: Quirino1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quirino1PageRoutingModule {}
