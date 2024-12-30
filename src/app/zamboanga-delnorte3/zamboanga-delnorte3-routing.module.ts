import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaDelnorte3Page } from './zamboanga-delnorte3.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaDelnorte3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaDelnorte3PageRoutingModule {}
