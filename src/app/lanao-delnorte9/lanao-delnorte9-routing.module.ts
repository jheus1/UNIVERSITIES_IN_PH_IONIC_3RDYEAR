import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanaoDelnorte9Page } from './lanao-delnorte9.page';

const routes: Routes = [
  {
    path: '',
    component: LanaoDelnorte9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanaoDelnorte9PageRoutingModule {}
