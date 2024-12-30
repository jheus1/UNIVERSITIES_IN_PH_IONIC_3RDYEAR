import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Zambales9Page } from './zambales9.page';

const routes: Routes = [
  {
    path: '',
    component: Zambales9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Zambales9PageRoutingModule {}
