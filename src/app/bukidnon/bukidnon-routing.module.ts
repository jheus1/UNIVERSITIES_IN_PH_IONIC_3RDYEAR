import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BukidnonPage } from './bukidnon.page';

const routes: Routes = [
  {
    path: '',
    component: BukidnonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BukidnonPageRoutingModule {}
