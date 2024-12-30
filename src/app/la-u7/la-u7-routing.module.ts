import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaU7Page } from './la-u7.page';

const routes: Routes = [
  {
    path: '',
    component: LaU7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaU7PageRoutingModule {}
