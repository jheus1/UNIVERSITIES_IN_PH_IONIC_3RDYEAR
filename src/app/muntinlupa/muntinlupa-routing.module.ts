import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuntinlupaPage } from './muntinlupa.page';

const routes: Routes = [
  {
    path: '',
    component: MuntinlupaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuntinlupaPageRoutingModule {}
