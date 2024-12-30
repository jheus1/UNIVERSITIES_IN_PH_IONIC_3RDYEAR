import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurigaoDelnorte3Page } from './surigao-delnorte3.page';

const routes: Routes = [
  {
    path: '',
    component: SurigaoDelnorte3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurigaoDelnorte3PageRoutingModule {}
