import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaDelsur5Page } from './zamboanga-delsur5.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaDelsur5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaDelsur5PageRoutingModule {}
