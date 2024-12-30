import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Iloilo8Page } from './iloilo8.page';

const routes: Routes = [
  {
    path: '',
    component: Iloilo8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Iloilo8PageRoutingModule {}
