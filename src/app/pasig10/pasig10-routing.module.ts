import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pasig10Page } from './pasig10.page';

const routes: Routes = [
  {
    path: '',
    component: Pasig10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pasig10PageRoutingModule {}
