import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DinagatIslands2Page } from './dinagat-islands2.page';

const routes: Routes = [
  {
    path: '',
    component: DinagatIslands2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DinagatIslands2PageRoutingModule {}
