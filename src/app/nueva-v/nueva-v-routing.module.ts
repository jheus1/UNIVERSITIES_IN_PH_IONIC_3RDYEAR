import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaVPage } from './nueva-v.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaVPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaVPageRoutingModule {}
