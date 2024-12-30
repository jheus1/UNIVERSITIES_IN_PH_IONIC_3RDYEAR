import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Zambales5Page } from './zambales5.page';

const routes: Routes = [
  {
    path: '',
    component: Zambales5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Zambales5PageRoutingModule {}
