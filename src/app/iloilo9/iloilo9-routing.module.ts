import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Iloilo9Page } from './iloilo9.page';

const routes: Routes = [
  {
    path: '',
    component: Iloilo9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Iloilo9PageRoutingModule {}
