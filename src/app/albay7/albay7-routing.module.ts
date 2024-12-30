import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Albay7Page } from './albay7.page';

const routes: Routes = [
  {
    path: '',
    component: Albay7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Albay7PageRoutingModule {}
