import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paranaque3Page } from './paranaque3.page';

const routes: Routes = [
  {
    path: '',
    component: Paranaque3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paranaque3PageRoutingModule {}
