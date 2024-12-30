import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaS5Page } from './zamboanga-s5.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaS5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaS5PageRoutingModule {}
