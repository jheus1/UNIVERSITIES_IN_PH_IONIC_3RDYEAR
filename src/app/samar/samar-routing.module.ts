import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamarPage } from './samar.page';

const routes: Routes = [
  {
    path: '',
    component: SamarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamarPageRoutingModule {}
