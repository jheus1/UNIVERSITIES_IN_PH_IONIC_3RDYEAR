import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bukidnon5Page } from './bukidnon5.page';

const routes: Routes = [
  {
    path: '',
    component: Bukidnon5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bukidnon5PageRoutingModule {}
