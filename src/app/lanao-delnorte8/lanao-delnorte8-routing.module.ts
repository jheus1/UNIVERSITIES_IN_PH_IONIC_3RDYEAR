import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanaoDelnorte8Page } from './lanao-delnorte8.page';

const routes: Routes = [
  {
    path: '',
    component: LanaoDelnorte8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanaoDelnorte8PageRoutingModule {}
