import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pasig2Page } from './pasig2.page';

const routes: Routes = [
  {
    path: '',
    component: Pasig2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pasig2PageRoutingModule {}
