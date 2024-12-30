import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DinagatIslands9Page } from './dinagat-islands9.page';

const routes: Routes = [
  {
    path: '',
    component: DinagatIslands9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DinagatIslands9PageRoutingModule {}
