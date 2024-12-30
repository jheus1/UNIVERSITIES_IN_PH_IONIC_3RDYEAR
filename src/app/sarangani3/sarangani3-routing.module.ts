import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sarangani3Page } from './sarangani3.page';

const routes: Routes = [
  {
    path: '',
    component: Sarangani3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sarangani3PageRoutingModule {}
