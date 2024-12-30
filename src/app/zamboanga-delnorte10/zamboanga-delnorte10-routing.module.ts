import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaDelnorte10Page } from './zamboanga-delnorte10.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaDelnorte10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaDelnorte10PageRoutingModule {}
