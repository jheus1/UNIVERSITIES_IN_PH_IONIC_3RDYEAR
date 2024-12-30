import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NorthernS1Page } from './northern-s1.page';

const routes: Routes = [
  {
    path: '',
    component: NorthernS1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NorthernS1PageRoutingModule {}
