import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoOriental7Page } from './davao-oriental7.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoOriental7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoOriental7PageRoutingModule {}
