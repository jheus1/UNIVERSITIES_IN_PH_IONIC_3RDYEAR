import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurigaoDelnortePage } from './surigao-delnorte.page';

const routes: Routes = [
  {
    path: '',
    component: SurigaoDelnortePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurigaoDelnortePageRoutingModule {}
