import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NorthernS5Page } from './northern-s5.page';

const routes: Routes = [
  {
    path: '',
    component: NorthernS5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NorthernS5PageRoutingModule {}
