import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quirino8Page } from './quirino8.page';

const routes: Routes = [
  {
    path: '',
    component: Quirino8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quirino8PageRoutingModule {}
