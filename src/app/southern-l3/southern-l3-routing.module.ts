import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouthernL3Page } from './southern-l3.page';

const routes: Routes = [
  {
    path: '',
    component: SouthernL3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouthernL3PageRoutingModule {}
