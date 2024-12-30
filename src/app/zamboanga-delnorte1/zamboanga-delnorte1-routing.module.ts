import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaDelnorte1Page } from './zamboanga-delnorte1.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaDelnorte1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaDelnorte1PageRoutingModule {}
