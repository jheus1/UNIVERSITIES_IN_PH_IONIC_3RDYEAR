import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quezon10Page } from './quezon10.page';

const routes: Routes = [
  {
    path: '',
    component: Quezon10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quezon10PageRoutingModule {}
