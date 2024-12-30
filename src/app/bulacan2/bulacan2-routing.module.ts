import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bulacan2Page } from './bulacan2.page';

const routes: Routes = [
  {
    path: '',
    component: Bulacan2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bulacan2PageRoutingModule {}
