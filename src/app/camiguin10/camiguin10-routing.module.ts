import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Camiguin10Page } from './camiguin10.page';

const routes: Routes = [
  {
    path: '',
    component: Camiguin10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Camiguin10PageRoutingModule {}
