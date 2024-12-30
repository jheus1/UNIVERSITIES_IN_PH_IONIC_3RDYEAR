import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Marikina9Page } from './marikina9.page';

const routes: Routes = [
  {
    path: '',
    component: Marikina9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Marikina9PageRoutingModule {}
