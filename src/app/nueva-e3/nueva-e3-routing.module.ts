import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaE3Page } from './nueva-e3.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaE3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaE3PageRoutingModule {}
