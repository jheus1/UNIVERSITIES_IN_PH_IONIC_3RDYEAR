import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Camiguin5Page } from './camiguin5.page';

const routes: Routes = [
  {
    path: '',
    component: Camiguin5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Camiguin5PageRoutingModule {}
