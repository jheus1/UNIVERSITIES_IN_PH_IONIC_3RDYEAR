import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisamisOccidental4Page } from './misamis-occidental4.page';

const routes: Routes = [
  {
    path: '',
    component: MisamisOccidental4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisamisOccidental4PageRoutingModule {}
