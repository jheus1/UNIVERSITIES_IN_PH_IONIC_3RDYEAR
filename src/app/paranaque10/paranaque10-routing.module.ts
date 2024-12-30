import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paranaque10Page } from './paranaque10.page';

const routes: Routes = [
  {
    path: '',
    component: Paranaque10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paranaque10PageRoutingModule {}
