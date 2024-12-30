import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quirino6Page } from './quirino6.page';

const routes: Routes = [
  {
    path: '',
    component: Quirino6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quirino6PageRoutingModule {}
