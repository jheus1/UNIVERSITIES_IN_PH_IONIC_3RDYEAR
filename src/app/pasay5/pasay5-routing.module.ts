import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pasay5Page } from './pasay5.page';

const routes: Routes = [
  {
    path: '',
    component: Pasay5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pasay5PageRoutingModule {}
