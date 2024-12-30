import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Albay10Page } from './albay10.page';

const routes: Routes = [
  {
    path: '',
    component: Albay10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Albay10PageRoutingModule {}
