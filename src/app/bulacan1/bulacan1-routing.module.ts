import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bulacan1Page } from './bulacan1.page';

const routes: Routes = [
  {
    path: '',
    component: Bulacan1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bulacan1PageRoutingModule {}
