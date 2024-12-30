import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoOccidental1Page } from './davao-occidental1.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoOccidental1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoOccidental1PageRoutingModule {}
