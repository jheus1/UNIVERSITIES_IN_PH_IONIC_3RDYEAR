import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paranaque6Page } from './paranaque6.page';

const routes: Routes = [
  {
    path: '',
    component: Paranaque6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paranaque6PageRoutingModule {}
