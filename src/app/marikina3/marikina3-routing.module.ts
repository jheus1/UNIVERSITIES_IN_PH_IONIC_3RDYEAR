import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Marikina3Page } from './marikina3.page';

const routes: Routes = [
  {
    path: '',
    component: Marikina3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Marikina3PageRoutingModule {}
