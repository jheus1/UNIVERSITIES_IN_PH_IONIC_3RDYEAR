import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoOccidental2Page } from './davao-occidental2.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoOccidental2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoOccidental2PageRoutingModule {}
