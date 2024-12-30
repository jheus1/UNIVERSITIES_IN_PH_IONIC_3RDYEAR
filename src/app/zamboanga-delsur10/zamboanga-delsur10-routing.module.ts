import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaDelsur10Page } from './zamboanga-delsur10.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaDelsur10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaDelsur10PageRoutingModule {}
