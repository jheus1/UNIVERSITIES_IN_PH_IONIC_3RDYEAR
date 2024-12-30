import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisamisOccidental10Page } from './misamis-occidental10.page';

const routes: Routes = [
  {
    path: '',
    component: MisamisOccidental10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisamisOccidental10PageRoutingModule {}
