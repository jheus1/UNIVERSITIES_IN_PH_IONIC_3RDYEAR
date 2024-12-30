import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Region9Page } from './region9.page';

const routes: Routes = [
  {
    path: '',
    component: Region9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Region9PageRoutingModule {}
