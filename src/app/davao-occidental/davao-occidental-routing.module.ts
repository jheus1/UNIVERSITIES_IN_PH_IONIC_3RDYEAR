import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoOccidentalPage } from './davao-occidental.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoOccidentalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoOccidentalPageRoutingModule {}
