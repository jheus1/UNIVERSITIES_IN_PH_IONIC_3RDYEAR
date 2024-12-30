import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouthernL2Page } from './southern-l2.page';

const routes: Routes = [
  {
    path: '',
    component: SouthernL2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouthernL2PageRoutingModule {}
