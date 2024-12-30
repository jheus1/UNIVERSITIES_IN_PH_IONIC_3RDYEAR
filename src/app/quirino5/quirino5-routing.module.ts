import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quirino5Page } from './quirino5.page';

const routes: Routes = [
  {
    path: '',
    component: Quirino5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quirino5PageRoutingModule {}
