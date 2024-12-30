import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaE4Page } from './nueva-e4.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaE4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaE4PageRoutingModule {}
