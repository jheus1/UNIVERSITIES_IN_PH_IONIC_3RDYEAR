import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tarlac6Page } from './tarlac6.page';

const routes: Routes = [
  {
    path: '',
    component: Tarlac6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tarlac6PageRoutingModule {}
