import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Palawan1Page } from './palawan1.page';

const routes: Routes = [
  {
    path: '',
    component: Palawan1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Palawan1PageRoutingModule {}
