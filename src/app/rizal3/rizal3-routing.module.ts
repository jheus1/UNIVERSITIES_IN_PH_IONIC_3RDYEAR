import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rizal3Page } from './rizal3.page';

const routes: Routes = [
  {
    path: '',
    component: Rizal3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rizal3PageRoutingModule {}
