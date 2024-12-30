import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sarangani8Page } from './sarangani8.page';

const routes: Routes = [
  {
    path: '',
    component: Sarangani8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sarangani8PageRoutingModule {}
