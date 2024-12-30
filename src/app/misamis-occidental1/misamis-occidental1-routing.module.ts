import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisamisOccidental1Page } from './misamis-occidental1.page';

const routes: Routes = [
  {
    path: '',
    component: MisamisOccidental1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisamisOccidental1PageRoutingModule {}
