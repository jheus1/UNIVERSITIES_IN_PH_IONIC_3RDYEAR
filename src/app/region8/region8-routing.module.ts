import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Region8Page } from './region8.page';

const routes: Routes = [
  {
    path: '',
    component: Region8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Region8PageRoutingModule {}
