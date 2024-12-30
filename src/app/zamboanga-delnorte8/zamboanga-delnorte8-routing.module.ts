import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaDelnorte8Page } from './zamboanga-delnorte8.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaDelnorte8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaDelnorte8PageRoutingModule {}
