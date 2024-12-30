import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaU3Page } from './la-u3.page';

const routes: Routes = [
  {
    path: '',
    component: LaU3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaU3PageRoutingModule {}
