import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoDelnorte3Page } from './davao-delnorte3.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoDelnorte3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoDelnorte3PageRoutingModule {}
