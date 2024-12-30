import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bulacan3Page } from './bulacan3.page';

const routes: Routes = [
  {
    path: '',
    component: Bulacan3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bulacan3PageRoutingModule {}
