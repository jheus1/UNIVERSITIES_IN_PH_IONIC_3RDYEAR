import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DinagatIslands5Page } from './dinagat-islands5.page';

const routes: Routes = [
  {
    path: '',
    component: DinagatIslands5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DinagatIslands5PageRoutingModule {}
