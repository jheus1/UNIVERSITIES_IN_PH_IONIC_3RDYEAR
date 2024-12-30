import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoOccidental3Page } from './davao-occidental3.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoOccidental3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoOccidental3PageRoutingModule {}
