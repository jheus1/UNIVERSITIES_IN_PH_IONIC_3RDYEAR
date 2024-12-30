import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Capiz5Page } from './capiz5.page';

const routes: Routes = [
  {
    path: '',
    component: Capiz5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Capiz5PageRoutingModule {}
