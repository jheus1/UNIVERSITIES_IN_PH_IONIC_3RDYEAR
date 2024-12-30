import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisamisOccidental5Page } from './misamis-occidental5.page';

const routes: Routes = [
  {
    path: '',
    component: MisamisOccidental5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisamisOccidental5PageRoutingModule {}
