import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaE1Page } from './nueva-e1.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaE1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaE1PageRoutingModule {}
