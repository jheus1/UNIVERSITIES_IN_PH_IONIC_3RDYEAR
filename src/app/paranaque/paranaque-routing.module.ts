import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParanaquePage } from './paranaque.page';

const routes: Routes = [
  {
    path: '',
    component: ParanaquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParanaquePageRoutingModule {}
