import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Masbate2Page } from './masbate2.page';

const routes: Routes = [
  {
    path: '',
    component: Masbate2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Masbate2PageRoutingModule {}
