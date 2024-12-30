import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurigaoDelnorte10Page } from './surigao-delnorte10.page';

const routes: Routes = [
  {
    path: '',
    component: SurigaoDelnorte10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurigaoDelnorte10PageRoutingModule {}
