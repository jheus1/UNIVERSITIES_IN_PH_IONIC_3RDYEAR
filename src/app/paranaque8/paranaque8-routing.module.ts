import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paranaque8Page } from './paranaque8.page';

const routes: Routes = [
  {
    path: '',
    component: Paranaque8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paranaque8PageRoutingModule {}
