import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouthernL6Page } from './southern-l6.page';

const routes: Routes = [
  {
    path: '',
    component: SouthernL6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouthernL6PageRoutingModule {}
