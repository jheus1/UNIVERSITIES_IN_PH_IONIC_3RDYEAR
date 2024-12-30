import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Iloilo10Page } from './iloilo10.page';

const routes: Routes = [
  {
    path: '',
    component: Iloilo10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Iloilo10PageRoutingModule {}
