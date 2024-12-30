import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouthernL4Page } from './southern-l4.page';

const routes: Routes = [
  {
    path: '',
    component: SouthernL4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouthernL4PageRoutingModule {}
