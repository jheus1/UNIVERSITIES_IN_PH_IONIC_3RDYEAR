import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Biliran3Page } from './biliran3.page';

const routes: Routes = [
  {
    path: '',
    component: Biliran3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Biliran3PageRoutingModule {}
