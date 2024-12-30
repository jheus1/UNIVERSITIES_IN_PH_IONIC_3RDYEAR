import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bulacan8Page } from './bulacan8.page';

const routes: Routes = [
  {
    path: '',
    component: Bulacan8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bulacan8PageRoutingModule {}
