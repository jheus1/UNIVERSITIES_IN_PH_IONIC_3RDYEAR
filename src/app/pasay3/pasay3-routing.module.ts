import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pasay3Page } from './pasay3.page';

const routes: Routes = [
  {
    path: '',
    component: Pasay3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pasay3PageRoutingModule {}
