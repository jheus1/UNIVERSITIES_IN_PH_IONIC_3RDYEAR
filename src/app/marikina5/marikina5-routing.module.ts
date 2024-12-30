import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Marikina5Page } from './marikina5.page';

const routes: Routes = [
  {
    path: '',
    component: Marikina5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Marikina5PageRoutingModule {}
