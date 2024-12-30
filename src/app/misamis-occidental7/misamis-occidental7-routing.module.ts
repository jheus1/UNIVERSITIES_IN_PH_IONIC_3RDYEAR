import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisamisOccidental7Page } from './misamis-occidental7.page';

const routes: Routes = [
  {
    path: '',
    component: MisamisOccidental7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisamisOccidental7PageRoutingModule {}
