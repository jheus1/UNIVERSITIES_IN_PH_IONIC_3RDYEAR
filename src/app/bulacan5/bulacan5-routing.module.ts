import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bulacan5Page } from './bulacan5.page';

const routes: Routes = [
  {
    path: '',
    component: Bulacan5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bulacan5PageRoutingModule {}
