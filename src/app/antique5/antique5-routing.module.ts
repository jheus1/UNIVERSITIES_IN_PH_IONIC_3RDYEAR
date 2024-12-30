import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Antique5Page } from './antique5.page';

const routes: Routes = [
  {
    path: '',
    component: Antique5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Antique5PageRoutingModule {}
