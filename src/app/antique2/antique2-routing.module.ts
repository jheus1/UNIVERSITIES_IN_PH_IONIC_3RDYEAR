import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Antique2Page } from './antique2.page';

const routes: Routes = [
  {
    path: '',
    component: Antique2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Antique2PageRoutingModule {}
