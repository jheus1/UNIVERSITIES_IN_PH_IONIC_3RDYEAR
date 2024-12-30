import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Capiz6Page } from './capiz6.page';

const routes: Routes = [
  {
    path: '',
    component: Capiz6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Capiz6PageRoutingModule {}
