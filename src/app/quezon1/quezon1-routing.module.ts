import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quezon1Page } from './quezon1.page';

const routes: Routes = [
  {
    path: '',
    component: Quezon1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quezon1PageRoutingModule {}
