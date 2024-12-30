import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quirino9Page } from './quirino9.page';

const routes: Routes = [
  {
    path: '',
    component: Quirino9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quirino9PageRoutingModule {}
