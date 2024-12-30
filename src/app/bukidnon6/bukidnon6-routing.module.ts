import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bukidnon6Page } from './bukidnon6.page';

const routes: Routes = [
  {
    path: '',
    component: Bukidnon6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bukidnon6PageRoutingModule {}
