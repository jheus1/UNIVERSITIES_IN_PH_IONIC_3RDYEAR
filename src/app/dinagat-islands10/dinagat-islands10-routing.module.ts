import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DinagatIslands10Page } from './dinagat-islands10.page';

const routes: Routes = [
  {
    path: '',
    component: DinagatIslands10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DinagatIslands10PageRoutingModule {}
