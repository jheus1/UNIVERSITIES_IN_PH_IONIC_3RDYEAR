import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quirino2Page } from './quirino2.page';

const routes: Routes = [
  {
    path: '',
    component: Quirino2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quirino2PageRoutingModule {}
