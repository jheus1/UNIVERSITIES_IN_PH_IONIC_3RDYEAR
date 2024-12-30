import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bulacan9Page } from './bulacan9.page';

const routes: Routes = [
  {
    path: '',
    component: Bulacan9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bulacan9PageRoutingModule {}
