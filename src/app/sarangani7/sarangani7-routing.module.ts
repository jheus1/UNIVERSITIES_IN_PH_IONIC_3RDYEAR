import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sarangani7Page } from './sarangani7.page';

const routes: Routes = [
  {
    path: '',
    component: Sarangani7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sarangani7PageRoutingModule {}
