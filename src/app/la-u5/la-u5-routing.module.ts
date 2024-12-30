import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaU5Page } from './la-u5.page';

const routes: Routes = [
  {
    path: '',
    component: LaU5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaU5PageRoutingModule {}
