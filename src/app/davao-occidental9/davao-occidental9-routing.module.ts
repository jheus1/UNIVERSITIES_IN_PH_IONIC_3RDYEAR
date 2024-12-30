import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoOccidental9Page } from './davao-occidental9.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoOccidental9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoOccidental9PageRoutingModule {}
