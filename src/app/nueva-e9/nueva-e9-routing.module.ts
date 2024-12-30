import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaE9Page } from './nueva-e9.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaE9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaE9PageRoutingModule {}
