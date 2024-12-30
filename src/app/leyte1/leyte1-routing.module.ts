import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Leyte1Page } from './leyte1.page';

const routes: Routes = [
  {
    path: '',
    component: Leyte1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Leyte1PageRoutingModule {}
