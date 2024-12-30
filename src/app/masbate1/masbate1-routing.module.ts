import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Masbate1Page } from './masbate1.page';

const routes: Routes = [
  {
    path: '',
    component: Masbate1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Masbate1PageRoutingModule {}
