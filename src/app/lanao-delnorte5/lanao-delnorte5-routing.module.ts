import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanaoDelnorte5Page } from './lanao-delnorte5.page';

const routes: Routes = [
  {
    path: '',
    component: LanaoDelnorte5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanaoDelnorte5PageRoutingModule {}
