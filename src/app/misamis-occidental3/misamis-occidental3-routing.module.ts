import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisamisOccidental3Page } from './misamis-occidental3.page';

const routes: Routes = [
  {
    path: '',
    component: MisamisOccidental3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisamisOccidental3PageRoutingModule {}
