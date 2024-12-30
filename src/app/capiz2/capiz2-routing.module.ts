import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Capiz2Page } from './capiz2.page';

const routes: Routes = [
  {
    path: '',
    component: Capiz2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Capiz2PageRoutingModule {}
