import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisamisOccidental6Page } from './misamis-occidental6.page';

const routes: Routes = [
  {
    path: '',
    component: MisamisOccidental6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisamisOccidental6PageRoutingModule {}
