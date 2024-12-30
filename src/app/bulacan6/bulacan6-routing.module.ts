import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bulacan6Page } from './bulacan6.page';

const routes: Routes = [
  {
    path: '',
    component: Bulacan6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bulacan6PageRoutingModule {}
