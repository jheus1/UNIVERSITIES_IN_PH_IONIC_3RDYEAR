import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisamisOccidental2Page } from './misamis-occidental2.page';

const routes: Routes = [
  {
    path: '',
    component: MisamisOccidental2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisamisOccidental2PageRoutingModule {}
