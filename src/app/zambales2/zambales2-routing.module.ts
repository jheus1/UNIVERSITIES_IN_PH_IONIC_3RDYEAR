import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Zambales2Page } from './zambales2.page';

const routes: Routes = [
  {
    path: '',
    component: Zambales2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Zambales2PageRoutingModule {}
