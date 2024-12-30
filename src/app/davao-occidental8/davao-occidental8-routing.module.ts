import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoOccidental8Page } from './davao-occidental8.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoOccidental8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoOccidental8PageRoutingModule {}
