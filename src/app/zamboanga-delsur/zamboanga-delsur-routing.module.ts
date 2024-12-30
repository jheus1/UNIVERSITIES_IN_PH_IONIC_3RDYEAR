import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaDelsurPage } from './zamboanga-delsur.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaDelsurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaDelsurPageRoutingModule {}
