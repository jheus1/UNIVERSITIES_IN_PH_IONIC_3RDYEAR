import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurigaoDelnorte6Page } from './surigao-delnorte6.page';

const routes: Routes = [
  {
    path: '',
    component: SurigaoDelnorte6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurigaoDelnorte6PageRoutingModule {}
