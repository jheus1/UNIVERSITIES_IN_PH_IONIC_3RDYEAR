import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Biliran4Page } from './biliran4.page';

const routes: Routes = [
  {
    path: '',
    component: Biliran4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Biliran4PageRoutingModule {}
