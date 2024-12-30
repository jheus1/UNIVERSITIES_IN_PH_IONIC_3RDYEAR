import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisamisOccidental9Page } from './misamis-occidental9.page';

const routes: Routes = [
  {
    path: '',
    component: MisamisOccidental9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisamisOccidental9PageRoutingModule {}
