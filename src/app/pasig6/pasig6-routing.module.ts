import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pasig6Page } from './pasig6.page';

const routes: Routes = [
  {
    path: '',
    component: Pasig6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pasig6PageRoutingModule {}
