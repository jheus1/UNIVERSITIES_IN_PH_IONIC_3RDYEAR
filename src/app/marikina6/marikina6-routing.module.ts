import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Marikina6Page } from './marikina6.page';

const routes: Routes = [
  {
    path: '',
    component: Marikina6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Marikina6PageRoutingModule {}
