import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurigaoDelnorte5Page } from './surigao-delnorte5.page';

const routes: Routes = [
  {
    path: '',
    component: SurigaoDelnorte5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurigaoDelnorte5PageRoutingModule {}
