import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Marikina10Page } from './marikina10.page';

const routes: Routes = [
  {
    path: '',
    component: Marikina10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Marikina10PageRoutingModule {}
