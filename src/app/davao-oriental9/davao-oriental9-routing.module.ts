import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoOriental9Page } from './davao-oriental9.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoOriental9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoOriental9PageRoutingModule {}
