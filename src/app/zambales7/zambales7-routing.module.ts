import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Zambales7Page } from './zambales7.page';

const routes: Routes = [
  {
    path: '',
    component: Zambales7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Zambales7PageRoutingModule {}
