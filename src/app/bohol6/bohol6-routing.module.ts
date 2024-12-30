import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bohol6Page } from './bohol6.page';

const routes: Routes = [
  {
    path: '',
    component: Bohol6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bohol6PageRoutingModule {}
