import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bukidnon8Page } from './bukidnon8.page';

const routes: Routes = [
  {
    path: '',
    component: Bukidnon8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bukidnon8PageRoutingModule {}
