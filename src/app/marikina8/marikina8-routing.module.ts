import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Marikina8Page } from './marikina8.page';

const routes: Routes = [
  {
    path: '',
    component: Marikina8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Marikina8PageRoutingModule {}
