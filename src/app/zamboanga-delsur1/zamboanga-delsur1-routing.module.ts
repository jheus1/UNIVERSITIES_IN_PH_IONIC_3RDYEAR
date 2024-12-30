import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaDelsur1Page } from './zamboanga-delsur1.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaDelsur1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaDelsur1PageRoutingModule {}
