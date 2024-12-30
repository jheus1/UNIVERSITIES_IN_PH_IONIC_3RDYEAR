import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pasig7Page } from './pasig7.page';

const routes: Routes = [
  {
    path: '',
    component: Pasig7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pasig7PageRoutingModule {}
