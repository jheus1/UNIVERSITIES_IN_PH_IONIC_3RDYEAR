import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaDelsur4Page } from './zamboanga-delsur4.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaDelsur4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaDelsur4PageRoutingModule {}
