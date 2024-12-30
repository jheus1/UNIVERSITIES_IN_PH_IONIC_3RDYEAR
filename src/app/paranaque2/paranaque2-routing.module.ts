import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paranaque2Page } from './paranaque2.page';

const routes: Routes = [
  {
    path: '',
    component: Paranaque2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paranaque2PageRoutingModule {}
