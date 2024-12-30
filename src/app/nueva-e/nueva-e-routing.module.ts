import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaEPage } from './nueva-e.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaEPageRoutingModule {}
