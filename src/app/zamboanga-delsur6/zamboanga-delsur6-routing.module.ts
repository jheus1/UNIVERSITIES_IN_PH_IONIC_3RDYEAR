import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamboangaDelsur6Page } from './zamboanga-delsur6.page';

const routes: Routes = [
  {
    path: '',
    component: ZamboangaDelsur6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamboangaDelsur6PageRoutingModule {}
