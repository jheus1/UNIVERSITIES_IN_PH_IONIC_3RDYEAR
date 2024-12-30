import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sarangani2Page } from './sarangani2.page';

const routes: Routes = [
  {
    path: '',
    component: Sarangani2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sarangani2PageRoutingModule {}
