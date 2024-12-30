import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rizal8Page } from './rizal8.page';

const routes: Routes = [
  {
    path: '',
    component: Rizal8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rizal8PageRoutingModule {}
