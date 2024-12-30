import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Albay6Page } from './albay6.page';

const routes: Routes = [
  {
    path: '',
    component: Albay6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Albay6PageRoutingModule {}
