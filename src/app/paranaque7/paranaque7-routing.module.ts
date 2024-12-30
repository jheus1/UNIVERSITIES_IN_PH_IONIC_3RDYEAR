import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paranaque7Page } from './paranaque7.page';

const routes: Routes = [
  {
    path: '',
    component: Paranaque7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paranaque7PageRoutingModule {}
