import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoOriental6Page } from './davao-oriental6.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoOriental6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoOriental6PageRoutingModule {}
