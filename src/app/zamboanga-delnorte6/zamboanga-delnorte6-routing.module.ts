import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaDelnorte6Page } from './zamboanga-delnorte6.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaDelnorte6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaDelnorte6PageRoutingModule {}
