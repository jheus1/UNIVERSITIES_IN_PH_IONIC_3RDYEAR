import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pasig8Page } from './pasig8.page';

const routes: Routes = [
  {
    path: '',
    component: Pasig8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pasig8PageRoutingModule {}
