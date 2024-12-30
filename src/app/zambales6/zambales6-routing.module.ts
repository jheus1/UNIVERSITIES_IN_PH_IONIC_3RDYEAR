import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Zambales6Page } from './zambales6.page';

const routes: Routes = [
  {
    path: '',
    component: Zambales6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Zambales6PageRoutingModule {}
