import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quezon4Page } from './quezon4.page';

const routes: Routes = [
  {
    path: '',
    component: Quezon4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quezon4PageRoutingModule {}
