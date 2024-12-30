import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurigaoDelnorte7Page } from './surigao-delnorte7.page';

const routes: Routes = [
  {
    path: '',
    component: SurigaoDelnorte7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurigaoDelnorte7PageRoutingModule {}
