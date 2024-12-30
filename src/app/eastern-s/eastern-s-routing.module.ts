import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasternSPage } from './eastern-s.page';

const routes: Routes = [
  {
    path: '',
    component: EasternSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasternSPageRoutingModule {}
