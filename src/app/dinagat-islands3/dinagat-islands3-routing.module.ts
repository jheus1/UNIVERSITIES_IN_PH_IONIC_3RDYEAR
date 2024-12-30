import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DinagatIslands3Page } from './dinagat-islands3.page';

const routes: Routes = [
  {
    path: '',
    component: DinagatIslands3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DinagatIslands3PageRoutingModule {}
