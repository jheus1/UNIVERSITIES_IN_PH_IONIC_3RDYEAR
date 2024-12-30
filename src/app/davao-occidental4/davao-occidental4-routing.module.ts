import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoOccidental4Page } from './davao-occidental4.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoOccidental4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoOccidental4PageRoutingModule {}
