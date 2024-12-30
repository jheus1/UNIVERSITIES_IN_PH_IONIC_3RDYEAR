import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamarinesN3Page } from './camarines-n3.page';

const routes: Routes = [
  {
    path: '',
    component: CamarinesN3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamarinesN3PageRoutingModule {}
