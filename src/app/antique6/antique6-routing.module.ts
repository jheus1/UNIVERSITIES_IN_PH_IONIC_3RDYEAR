import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Antique6Page } from './antique6.page';

const routes: Routes = [
  {
    path: '',
    component: Antique6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Antique6PageRoutingModule {}
