import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quezon6Page } from './quezon6.page';

const routes: Routes = [
  {
    path: '',
    component: Quezon6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quezon6PageRoutingModule {}
