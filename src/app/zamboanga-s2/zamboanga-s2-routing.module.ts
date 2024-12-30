import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaS2Page } from './zamboanga-s2.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaS2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaS2PageRoutingModule {}
