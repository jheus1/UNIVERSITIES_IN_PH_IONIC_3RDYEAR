import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoDelnortePage } from './davao-delnorte.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoDelnortePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoDelnortePageRoutingModule {}
