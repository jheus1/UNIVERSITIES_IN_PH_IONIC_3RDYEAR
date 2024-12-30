import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanaoDelnorte4Page } from './lanao-delnorte4.page';

const routes: Routes = [
  {
    path: '',
    component: LanaoDelnorte4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanaoDelnorte4PageRoutingModule {}
