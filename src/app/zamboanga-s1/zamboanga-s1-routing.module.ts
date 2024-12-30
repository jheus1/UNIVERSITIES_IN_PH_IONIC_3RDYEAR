import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaS1Page } from './zamboanga-s1.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaS1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaS1PageRoutingModule {}
