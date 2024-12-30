import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paranaque1Page } from './paranaque1.page';

const routes: Routes = [
  {
    path: '',
    component: Paranaque1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paranaque1PageRoutingModule {}
