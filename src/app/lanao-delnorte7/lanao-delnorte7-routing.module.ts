import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanaoDelnorte7Page } from './lanao-delnorte7.page';

const routes: Routes = [
  {
    path: '',
    component: LanaoDelnorte7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanaoDelnorte7PageRoutingModule {}
