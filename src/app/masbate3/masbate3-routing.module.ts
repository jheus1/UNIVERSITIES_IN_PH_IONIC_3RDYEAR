import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Masbate3Page } from './masbate3.page';

const routes: Routes = [
  {
    path: '',
    component: Masbate3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Masbate3PageRoutingModule {}
