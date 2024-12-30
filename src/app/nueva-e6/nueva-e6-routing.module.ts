import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaE6Page } from './nueva-e6.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaE6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaE6PageRoutingModule {}
