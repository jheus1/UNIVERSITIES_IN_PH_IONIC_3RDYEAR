import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Marikina7Page } from './marikina7.page';

const routes: Routes = [
  {
    path: '',
    component: Marikina7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Marikina7PageRoutingModule {}
