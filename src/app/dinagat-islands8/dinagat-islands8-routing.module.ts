import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DinagatIslands8Page } from './dinagat-islands8.page';

const routes: Routes = [
  {
    path: '',
    component: DinagatIslands8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DinagatIslands8PageRoutingModule {}
