import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Region7Page } from './region7.page';

const routes: Routes = [
  {
    path: '',
    component: Region7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Region7PageRoutingModule {}
