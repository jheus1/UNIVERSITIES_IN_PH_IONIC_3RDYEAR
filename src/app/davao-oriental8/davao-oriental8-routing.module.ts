import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoOriental8Page } from './davao-oriental8.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoOriental8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoOriental8PageRoutingModule {}
