import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pasig3Page } from './pasig3.page';

const routes: Routes = [
  {
    path: '',
    component: Pasig3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pasig3PageRoutingModule {}
