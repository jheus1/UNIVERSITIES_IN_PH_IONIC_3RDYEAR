import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bukidnon1Page } from './bukidnon1.page';

const routes: Routes = [
  {
    path: '',
    component: Bukidnon1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bukidnon1PageRoutingModule {}
