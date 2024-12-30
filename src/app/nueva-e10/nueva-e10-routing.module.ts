import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaE10Page } from './nueva-e10.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaE10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaE10PageRoutingModule {}
