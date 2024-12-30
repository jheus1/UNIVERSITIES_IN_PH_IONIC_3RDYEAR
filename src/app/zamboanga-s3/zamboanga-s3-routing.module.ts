import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaS3Page } from './zamboanga-s3.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaS3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaS3PageRoutingModule {}
