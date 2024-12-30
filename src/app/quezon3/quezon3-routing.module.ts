import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quezon3Page } from './quezon3.page';

const routes: Routes = [
  {
    path: '',
    component: Quezon3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quezon3PageRoutingModule {}
