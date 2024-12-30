import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sarangani5Page } from './sarangani5.page';

const routes: Routes = [
  {
    path: '',
    component: Sarangani5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sarangani5PageRoutingModule {}
