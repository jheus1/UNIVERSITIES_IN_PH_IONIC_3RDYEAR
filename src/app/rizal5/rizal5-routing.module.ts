import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rizal5Page } from './rizal5.page';

const routes: Routes = [
  {
    path: '',
    component: Rizal5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rizal5PageRoutingModule {}
