import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Capiz3Page } from './capiz3.page';

const routes: Routes = [
  {
    path: '',
    component: Capiz3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Capiz3PageRoutingModule {}
