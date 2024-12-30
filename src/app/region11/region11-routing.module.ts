import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Region11Page } from './region11.page';

const routes: Routes = [
  {
    path: '',
    component: Region11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Region11PageRoutingModule {}
