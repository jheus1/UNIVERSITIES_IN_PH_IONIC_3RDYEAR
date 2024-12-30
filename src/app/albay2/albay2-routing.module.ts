import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Albay2Page } from './albay2.page';

const routes: Routes = [
  {
    path: '',
    component: Albay2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Albay2PageRoutingModule {}
