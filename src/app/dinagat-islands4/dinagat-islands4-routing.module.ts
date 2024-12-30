import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DinagatIslands4Page } from './dinagat-islands4.page';

const routes: Routes = [
  {
    path: '',
    component: DinagatIslands4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DinagatIslands4PageRoutingModule {}
