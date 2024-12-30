import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisamisOriental3Page } from './misamis-oriental3.page';

const routes: Routes = [
  {
    path: '',
    component: MisamisOriental3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisamisOriental3PageRoutingModule {}
