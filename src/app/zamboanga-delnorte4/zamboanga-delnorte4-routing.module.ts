import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaDelnorte4Page } from './zamboanga-delnorte4.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaDelnorte4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaDelnorte4PageRoutingModule {}
