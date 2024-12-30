import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoOriental1Page } from './davao-oriental1.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoOriental1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoOriental1PageRoutingModule {}
