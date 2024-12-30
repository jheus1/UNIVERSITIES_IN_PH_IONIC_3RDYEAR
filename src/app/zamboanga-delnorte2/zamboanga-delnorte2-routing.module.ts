import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaDelnorte2Page } from './zamboanga-delnorte2.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaDelnorte2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaDelnorte2PageRoutingModule {}
