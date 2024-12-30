import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaDelsur2Page } from './zamboanga-delsur2.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaDelsur2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaDelsur2PageRoutingModule {}
