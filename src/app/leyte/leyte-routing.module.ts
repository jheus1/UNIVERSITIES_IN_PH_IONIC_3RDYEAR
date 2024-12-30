import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeytePage } from './leyte.page';

const routes: Routes = [
  {
    path: '',
    component: LeytePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeytePageRoutingModule {}
