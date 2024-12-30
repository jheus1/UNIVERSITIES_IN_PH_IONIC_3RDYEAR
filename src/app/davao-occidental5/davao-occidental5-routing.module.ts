import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoOccidental5Page } from './davao-occidental5.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoOccidental5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoOccidental5PageRoutingModule {}
