import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Region6Page } from './region6.page';

const routes: Routes = [
  {
    path: '',
    component: Region6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Region6PageRoutingModule {}
