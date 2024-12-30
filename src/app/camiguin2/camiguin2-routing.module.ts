import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Camiguin2Page } from './camiguin2.page';

const routes: Routes = [
  {
    path: '',
    component: Camiguin2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Camiguin2PageRoutingModule {}
