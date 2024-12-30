import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Antique7Page } from './antique7.page';

const routes: Routes = [
  {
    path: '',
    component: Antique7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Antique7PageRoutingModule {}
