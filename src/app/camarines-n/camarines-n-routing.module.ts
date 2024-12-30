import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamarinesNPage } from './camarines-n.page';

const routes: Routes = [
  {
    path: '',
    component: CamarinesNPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamarinesNPageRoutingModule {}
