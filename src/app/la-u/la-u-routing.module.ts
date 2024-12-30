import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaUPage } from './la-u.page';

const routes: Routes = [
  {
    path: '',
    component: LaUPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaUPageRoutingModule {}
