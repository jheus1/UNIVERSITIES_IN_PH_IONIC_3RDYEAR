import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Iloilo7Page } from './iloilo7.page';

const routes: Routes = [
  {
    path: '',
    component: Iloilo7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Iloilo7PageRoutingModule {}
