import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bulacan10Page } from './bulacan10.page';

const routes: Routes = [
  {
    path: '',
    component: Bulacan10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bulacan10PageRoutingModule {}
