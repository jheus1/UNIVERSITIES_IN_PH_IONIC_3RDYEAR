import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaDelsur9Page } from './zamboanga-delsur9.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaDelsur9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaDelsur9PageRoutingModule {}
