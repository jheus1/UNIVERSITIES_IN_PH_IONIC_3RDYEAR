import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rizal6Page } from './rizal6.page';

const routes: Routes = [
  {
    path: '',
    component: Rizal6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rizal6PageRoutingModule {}
