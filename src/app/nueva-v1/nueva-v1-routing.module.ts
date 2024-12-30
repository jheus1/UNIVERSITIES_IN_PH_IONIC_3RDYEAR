import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaV1Page } from './nueva-v1.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaV1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaV1PageRoutingModule {}
