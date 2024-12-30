import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaV2Page } from './nueva-v2.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaV2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaV2PageRoutingModule {}
