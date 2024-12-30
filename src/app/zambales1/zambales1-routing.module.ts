import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Zambales1Page } from './zambales1.page';

const routes: Routes = [
  {
    path: '',
    component: Zambales1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Zambales1PageRoutingModule {}
