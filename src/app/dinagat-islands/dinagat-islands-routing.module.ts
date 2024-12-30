import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DinagatIslandsPage } from './dinagat-islands.page';

const routes: Routes = [
  {
    path: '',
    component: DinagatIslandsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DinagatIslandsPageRoutingModule {}
