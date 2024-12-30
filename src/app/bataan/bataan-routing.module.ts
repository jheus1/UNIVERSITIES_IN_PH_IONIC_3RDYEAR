import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BataanPage } from './bataan.page';

const routes: Routes = [
  {
    path: '',
    component: BataanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BataanPageRoutingModule {}
