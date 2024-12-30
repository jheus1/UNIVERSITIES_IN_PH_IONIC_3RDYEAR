import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Aklan5Page } from './aklan5.page';

const routes: Routes = [
  {
    path: '',
    component: Aklan5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Aklan5PageRoutingModule {}
