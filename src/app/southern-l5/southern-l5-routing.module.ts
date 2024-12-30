import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouthernL5Page } from './southern-l5.page';

const routes: Routes = [
  {
    path: '',
    component: SouthernL5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouthernL5PageRoutingModule {}
