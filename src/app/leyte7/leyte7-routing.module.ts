import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Leyte7Page } from './leyte7.page';

const routes: Routes = [
  {
    path: '',
    component: Leyte7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Leyte7PageRoutingModule {}
