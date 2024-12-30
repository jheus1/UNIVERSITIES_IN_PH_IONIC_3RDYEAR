import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paranaque5Page } from './paranaque5.page';

const routes: Routes = [
  {
    path: '',
    component: Paranaque5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paranaque5PageRoutingModule {}
