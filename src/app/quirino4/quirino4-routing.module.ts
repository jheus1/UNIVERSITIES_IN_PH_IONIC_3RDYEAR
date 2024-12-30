import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quirino4Page } from './quirino4.page';

const routes: Routes = [
  {
    path: '',
    component: Quirino4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quirino4PageRoutingModule {}
