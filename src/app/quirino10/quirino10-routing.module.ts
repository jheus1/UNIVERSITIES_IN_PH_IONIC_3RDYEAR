import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quirino10Page } from './quirino10.page';

const routes: Routes = [
  {
    path: '',
    component: Quirino10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quirino10PageRoutingModule {}
