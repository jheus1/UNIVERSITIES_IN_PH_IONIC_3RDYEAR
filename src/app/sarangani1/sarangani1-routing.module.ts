import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sarangani1Page } from './sarangani1.page';

const routes: Routes = [
  {
    path: '',
    component: Sarangani1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sarangani1PageRoutingModule {}
