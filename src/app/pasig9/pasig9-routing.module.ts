import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pasig9Page } from './pasig9.page';

const routes: Routes = [
  {
    path: '',
    component: Pasig9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pasig9PageRoutingModule {}
