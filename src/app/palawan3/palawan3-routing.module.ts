import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Palawan3Page } from './palawan3.page';

const routes: Routes = [
  {
    path: '',
    component: Palawan3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Palawan3PageRoutingModule {}
