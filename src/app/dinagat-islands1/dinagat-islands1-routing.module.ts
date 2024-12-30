import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DinagatIslands1Page } from './dinagat-islands1.page';

const routes: Routes = [
  {
    path: '',
    component: DinagatIslands1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DinagatIslands1PageRoutingModule {}
