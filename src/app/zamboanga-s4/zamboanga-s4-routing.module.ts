import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaS4Page } from './zamboanga-s4.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaS4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaS4PageRoutingModule {}
