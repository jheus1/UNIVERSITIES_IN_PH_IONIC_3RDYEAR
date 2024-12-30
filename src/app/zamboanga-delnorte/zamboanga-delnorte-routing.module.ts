import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaDelnortePage } from './zamboanga-delnorte.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaDelnortePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaDelnortePageRoutingModule {}
