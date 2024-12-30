import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgusanDelnortePage } from './agusan-delnorte.page';

const routes: Routes = [
  {
    path: '',
    component: AgusanDelnortePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgusanDelnortePageRoutingModule {}
