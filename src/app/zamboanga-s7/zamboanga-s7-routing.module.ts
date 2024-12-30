import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaS7Page } from './zamboanga-s7.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaS7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaS7PageRoutingModule {}
