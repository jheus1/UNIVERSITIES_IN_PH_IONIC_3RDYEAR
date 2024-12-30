import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaS10Page } from './zamboanga-s10.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaS10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaS10PageRoutingModule {}
