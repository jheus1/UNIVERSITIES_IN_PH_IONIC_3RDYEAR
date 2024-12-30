import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Marikina1Page } from './marikina1.page';

const routes: Routes = [
  {
    path: '',
    component: Marikina1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Marikina1PageRoutingModule {}
