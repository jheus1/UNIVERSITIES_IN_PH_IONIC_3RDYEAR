import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaV4Page } from './nueva-v4.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaV4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaV4PageRoutingModule {}
