import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pasay7Page } from './pasay7.page';

const routes: Routes = [
  {
    path: '',
    component: Pasay7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pasay7PageRoutingModule {}
