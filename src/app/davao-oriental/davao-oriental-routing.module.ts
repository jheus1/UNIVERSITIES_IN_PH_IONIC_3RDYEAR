import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoOrientalPage } from './davao-oriental.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoOrientalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoOrientalPageRoutingModule {}
