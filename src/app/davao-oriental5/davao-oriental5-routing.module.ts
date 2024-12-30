import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoOriental5Page } from './davao-oriental5.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoOriental5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoOriental5PageRoutingModule {}
