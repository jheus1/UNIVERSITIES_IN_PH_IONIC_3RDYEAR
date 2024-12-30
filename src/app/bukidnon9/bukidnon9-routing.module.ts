import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bukidnon9Page } from './bukidnon9.page';

const routes: Routes = [
  {
    path: '',
    component: Bukidnon9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bukidnon9PageRoutingModule {}
