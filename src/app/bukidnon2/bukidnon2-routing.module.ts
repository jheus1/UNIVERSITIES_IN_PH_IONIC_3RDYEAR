import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bukidnon2Page } from './bukidnon2.page';

const routes: Routes = [
  {
    path: '',
    component: Bukidnon2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bukidnon2PageRoutingModule {}
