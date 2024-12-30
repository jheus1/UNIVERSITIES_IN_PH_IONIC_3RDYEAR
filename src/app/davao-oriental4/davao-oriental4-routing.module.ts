import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoOriental4Page } from './davao-oriental4.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoOriental4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoOriental4PageRoutingModule {}
