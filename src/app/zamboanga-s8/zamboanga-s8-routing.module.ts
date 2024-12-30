import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaS8Page } from './zamboanga-s8.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaS8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaS8PageRoutingModule {}
