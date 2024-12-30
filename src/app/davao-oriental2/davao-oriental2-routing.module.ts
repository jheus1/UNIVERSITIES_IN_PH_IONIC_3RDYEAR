import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoOriental2Page } from './davao-oriental2.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoOriental2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoOriental2PageRoutingModule {}
