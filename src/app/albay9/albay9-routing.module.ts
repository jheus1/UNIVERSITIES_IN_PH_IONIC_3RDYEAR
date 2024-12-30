import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Albay9Page } from './albay9.page';

const routes: Routes = [
  {
    path: '',
    component: Albay9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Albay9PageRoutingModule {}
