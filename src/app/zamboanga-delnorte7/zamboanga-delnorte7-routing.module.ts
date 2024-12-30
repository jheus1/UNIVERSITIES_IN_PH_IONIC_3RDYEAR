import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaDelnorte7Page } from './zamboanga-delnorte7.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaDelnorte7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaDelnorte7PageRoutingModule {}
