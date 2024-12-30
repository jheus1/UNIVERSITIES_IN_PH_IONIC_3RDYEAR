import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DinagatIslands7Page } from './dinagat-islands7.page';

const routes: Routes = [
  {
    path: '',
    component: DinagatIslands7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DinagatIslands7PageRoutingModule {}
