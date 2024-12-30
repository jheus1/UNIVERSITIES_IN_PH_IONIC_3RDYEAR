import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Aklan7Page } from './aklan7.page';

const routes: Routes = [
  {
    path: '',
    component: Aklan7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Aklan7PageRoutingModule {}
