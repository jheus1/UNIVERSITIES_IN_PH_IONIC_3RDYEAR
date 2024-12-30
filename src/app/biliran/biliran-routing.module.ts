import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiliranPage } from './biliran.page';

const routes: Routes = [
  {
    path: '',
    component: BiliranPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiliranPageRoutingModule {}
