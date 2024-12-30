import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quezon7Page } from './quezon7.page';

const routes: Routes = [
  {
    path: '',
    component: Quezon7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quezon7PageRoutingModule {}
