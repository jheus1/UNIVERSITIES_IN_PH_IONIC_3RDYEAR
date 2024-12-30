import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaSPage } from './zamboanga-s.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaSPageRoutingModule {}
