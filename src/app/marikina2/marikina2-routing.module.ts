import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Marikina2Page } from './marikina2.page';

const routes: Routes = [
  {
    path: '',
    component: Marikina2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Marikina2PageRoutingModule {}
