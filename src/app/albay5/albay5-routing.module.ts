import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Albay5Page } from './albay5.page';

const routes: Routes = [
  {
    path: '',
    component: Albay5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Albay5PageRoutingModule {}
