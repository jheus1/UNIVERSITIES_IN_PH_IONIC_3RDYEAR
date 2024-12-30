import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanaoDelnortePage } from './lanao-delnorte.page';

const routes: Routes = [
  {
    path: '',
    component: LanaoDelnortePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanaoDelnortePageRoutingModule {}
