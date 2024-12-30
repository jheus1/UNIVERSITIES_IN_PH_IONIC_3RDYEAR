import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Aklan3Page } from './aklan3.page';

const routes: Routes = [
  {
    path: '',
    component: Aklan3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Aklan3PageRoutingModule {}
