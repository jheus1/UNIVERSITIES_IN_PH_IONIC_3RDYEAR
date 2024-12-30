import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Iloilo3Page } from './iloilo3.page';

const routes: Routes = [
  {
    path: '',
    component: Iloilo3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Iloilo3PageRoutingModule {}
