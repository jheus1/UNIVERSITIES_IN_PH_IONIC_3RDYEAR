import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoOccidental6Page } from './davao-occidental6.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoOccidental6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoOccidental6PageRoutingModule {}
