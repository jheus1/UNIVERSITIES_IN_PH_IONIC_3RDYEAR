import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Iloilo2Page } from './iloilo2.page';

const routes: Routes = [
  {
    path: '',
    component: Iloilo2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Iloilo2PageRoutingModule {}
