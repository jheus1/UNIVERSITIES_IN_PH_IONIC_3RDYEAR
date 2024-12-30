import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaDelnorte9Page } from './zamboanga-delnorte9.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaDelnorte9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaDelnorte9PageRoutingModule {}
