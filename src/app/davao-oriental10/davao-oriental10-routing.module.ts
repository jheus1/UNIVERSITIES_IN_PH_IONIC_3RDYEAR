import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoOriental10Page } from './davao-oriental10.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoOriental10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoOriental10PageRoutingModule {}
