import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaS9Page } from './zamboanga-s9.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaS9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaS9PageRoutingModule {}
