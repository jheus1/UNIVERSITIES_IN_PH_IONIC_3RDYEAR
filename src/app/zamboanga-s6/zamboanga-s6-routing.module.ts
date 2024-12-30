import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaS6Page } from './zamboanga-s6.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaS6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaS6PageRoutingModule {}
