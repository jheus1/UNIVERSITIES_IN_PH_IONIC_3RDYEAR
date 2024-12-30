import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bulacan7Page } from './bulacan7.page';

const routes: Routes = [
  {
    path: '',
    component: Bulacan7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bulacan7PageRoutingModule {}
