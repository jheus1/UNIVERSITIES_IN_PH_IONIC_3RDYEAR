import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bukidnon7Page } from './bukidnon7.page';

const routes: Routes = [
  {
    path: '',
    component: Bukidnon7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bukidnon7PageRoutingModule {}
