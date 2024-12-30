import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaE2Page } from './nueva-e2.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaE2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaE2PageRoutingModule {}
