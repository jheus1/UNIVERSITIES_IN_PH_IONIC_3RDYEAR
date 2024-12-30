import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paranaque4Page } from './paranaque4.page';

const routes: Routes = [
  {
    path: '',
    component: Paranaque4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paranaque4PageRoutingModule {}
