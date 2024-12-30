import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pasig1Page } from './pasig1.page';

const routes: Routes = [
  {
    path: '',
    component: Pasig1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pasig1PageRoutingModule {}
