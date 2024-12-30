import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Palawan2Page } from './palawan2.page';

const routes: Routes = [
  {
    path: '',
    component: Palawan2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Palawan2PageRoutingModule {}
