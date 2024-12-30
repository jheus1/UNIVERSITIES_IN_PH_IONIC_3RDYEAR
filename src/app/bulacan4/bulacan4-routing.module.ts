import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bulacan4Page } from './bulacan4.page';

const routes: Routes = [
  {
    path: '',
    component: Bulacan4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bulacan4PageRoutingModule {}
