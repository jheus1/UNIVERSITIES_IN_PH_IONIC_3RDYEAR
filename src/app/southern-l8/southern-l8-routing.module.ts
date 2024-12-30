import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouthernL8Page } from './southern-l8.page';

const routes: Routes = [
  {
    path: '',
    component: SouthernL8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouthernL8PageRoutingModule {}
