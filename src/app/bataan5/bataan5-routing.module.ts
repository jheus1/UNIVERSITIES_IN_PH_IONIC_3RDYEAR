import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bataan5Page } from './bataan5.page';

const routes: Routes = [
  {
    path: '',
    component: Bataan5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bataan5PageRoutingModule {}
