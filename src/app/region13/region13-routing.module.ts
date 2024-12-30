import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Region13Page } from './region13.page';

const routes: Routes = [
  {
    path: '',
    component: Region13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Region13PageRoutingModule {}
