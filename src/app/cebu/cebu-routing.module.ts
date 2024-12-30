import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CebuPage } from './cebu.page';

const routes: Routes = [
  {
    path: '',
    component: CebuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CebuPageRoutingModule {}
