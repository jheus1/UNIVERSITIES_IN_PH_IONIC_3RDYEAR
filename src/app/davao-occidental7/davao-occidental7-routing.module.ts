import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoOccidental7Page } from './davao-occidental7.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoOccidental7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoOccidental7PageRoutingModule {}
