import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoOccidental10Page } from './davao-occidental10.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoOccidental10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoOccidental10PageRoutingModule {}
