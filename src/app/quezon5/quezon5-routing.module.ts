import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quezon5Page } from './quezon5.page';

const routes: Routes = [
  {
    path: '',
    component: Quezon5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quezon5PageRoutingModule {}
