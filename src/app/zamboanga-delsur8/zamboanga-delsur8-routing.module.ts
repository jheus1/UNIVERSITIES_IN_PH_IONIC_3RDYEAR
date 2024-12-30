import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaDelsur8Page } from './zamboanga-delsur8.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaDelsur8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaDelsur8PageRoutingModule {}
