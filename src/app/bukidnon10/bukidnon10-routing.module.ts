import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bukidnon10Page } from './bukidnon10.page';

const routes: Routes = [
  {
    path: '',
    component: Bukidnon10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bukidnon10PageRoutingModule {}
