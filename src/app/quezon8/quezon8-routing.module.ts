import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quezon8Page } from './quezon8.page';

const routes: Routes = [
  {
    path: '',
    component: Quezon8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quezon8PageRoutingModule {}
