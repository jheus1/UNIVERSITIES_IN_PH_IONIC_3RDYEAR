import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Camiguin7Page } from './camiguin7.page';

const routes: Routes = [
  {
    path: '',
    component: Camiguin7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Camiguin7PageRoutingModule {}
