import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaDelsur7Page } from './zamboanga-delsur7.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaDelsur7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaDelsur7PageRoutingModule {}
