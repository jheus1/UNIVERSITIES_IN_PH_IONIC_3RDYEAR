import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Biliran2Page } from './biliran2.page';

const routes: Routes = [
  {
    path: '',
    component: Biliran2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Biliran2PageRoutingModule {}
