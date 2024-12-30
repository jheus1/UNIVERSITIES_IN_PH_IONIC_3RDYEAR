import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouthernL7Page } from './southern-l7.page';

const routes: Routes = [
  {
    path: '',
    component: SouthernL7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouthernL7PageRoutingModule {}
