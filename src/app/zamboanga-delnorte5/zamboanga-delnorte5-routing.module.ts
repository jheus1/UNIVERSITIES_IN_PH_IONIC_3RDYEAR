import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaDelnorte5Page } from './zamboanga-delnorte5.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaDelnorte5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaDelnorte5PageRoutingModule {}
