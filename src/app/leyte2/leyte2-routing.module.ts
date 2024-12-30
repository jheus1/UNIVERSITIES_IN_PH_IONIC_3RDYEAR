import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Leyte2Page } from './leyte2.page';

const routes: Routes = [
  {
    path: '',
    component: Leyte2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Leyte2PageRoutingModule {}
