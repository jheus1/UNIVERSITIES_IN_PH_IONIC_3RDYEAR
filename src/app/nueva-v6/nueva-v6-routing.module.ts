import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaV6Page } from './nueva-v6.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaV6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaV6PageRoutingModule {}
