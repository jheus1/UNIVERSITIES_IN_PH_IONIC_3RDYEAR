import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaE7Page } from './nueva-e7.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaE7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaE7PageRoutingModule {}
