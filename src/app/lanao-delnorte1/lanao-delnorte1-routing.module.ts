import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanaoDelnorte1Page } from './lanao-delnorte1.page';

const routes: Routes = [
  {
    path: '',
    component: LanaoDelnorte1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanaoDelnorte1PageRoutingModule {}
