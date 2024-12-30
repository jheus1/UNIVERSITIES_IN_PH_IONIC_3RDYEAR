import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Iloilo4Page } from './iloilo4.page';

const routes: Routes = [
  {
    path: '',
    component: Iloilo4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Iloilo4PageRoutingModule {}
