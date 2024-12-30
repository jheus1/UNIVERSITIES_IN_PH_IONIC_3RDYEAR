import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sarangani6Page } from './sarangani6.page';

const routes: Routes = [
  {
    path: '',
    component: Sarangani6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sarangani6PageRoutingModule {}
