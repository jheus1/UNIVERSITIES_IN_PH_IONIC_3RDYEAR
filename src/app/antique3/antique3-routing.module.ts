import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Antique3Page } from './antique3.page';

const routes: Routes = [
  {
    path: '',
    component: Antique3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Antique3PageRoutingModule {}
