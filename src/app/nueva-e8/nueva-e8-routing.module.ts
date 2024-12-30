import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaE8Page } from './nueva-e8.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaE8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaE8PageRoutingModule {}
