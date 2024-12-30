import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaDelsur3Page } from './zamboanga-delsur3.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaDelsur3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaDelsur3PageRoutingModule {}
