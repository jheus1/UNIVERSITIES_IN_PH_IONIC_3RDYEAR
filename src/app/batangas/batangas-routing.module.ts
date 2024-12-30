import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BatangasPage } from './batangas.page';

const routes: Routes = [
  {
    path: '',
    component: BatangasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BatangasPageRoutingModule {}
