import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrientalM3Page } from './oriental-m3.page';

const routes: Routes = [
  {
    path: '',
    component: OrientalM3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrientalM3PageRoutingModule {}
