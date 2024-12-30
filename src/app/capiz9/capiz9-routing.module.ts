import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Capiz9Page } from './capiz9.page';

const routes: Routes = [
  {
    path: '',
    component: Capiz9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Capiz9PageRoutingModule {}
