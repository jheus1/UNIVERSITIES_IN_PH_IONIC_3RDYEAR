import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Camiguin3Page } from './camiguin3.page';

const routes: Routes = [
  {
    path: '',
    component: Camiguin3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Camiguin3PageRoutingModule {}
