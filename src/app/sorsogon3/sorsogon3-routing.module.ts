import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sorsogon3Page } from './sorsogon3.page';

const routes: Routes = [
  {
    path: '',
    component: Sorsogon3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sorsogon3PageRoutingModule {}
