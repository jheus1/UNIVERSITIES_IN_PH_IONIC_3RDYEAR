import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouthernL1Page } from './southern-l1.page';

const routes: Routes = [
  {
    path: '',
    component: SouthernL1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouthernL1PageRoutingModule {}
