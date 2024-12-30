import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaU8Page } from './la-u8.page';

const routes: Routes = [
  {
    path: '',
    component: LaU8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaU8PageRoutingModule {}
