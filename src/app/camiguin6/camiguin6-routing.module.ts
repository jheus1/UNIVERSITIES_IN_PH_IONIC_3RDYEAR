import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Camiguin6Page } from './camiguin6.page';

const routes: Routes = [
  {
    path: '',
    component: Camiguin6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Camiguin6PageRoutingModule {}
