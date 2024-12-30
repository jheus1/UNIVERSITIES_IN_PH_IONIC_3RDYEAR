import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Aklan2Page } from './aklan2.page';

const routes: Routes = [
  {
    path: '',
    component: Aklan2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Aklan2PageRoutingModule {}
