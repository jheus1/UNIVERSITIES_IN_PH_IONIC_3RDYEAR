import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegrosO3Page } from './negros-o3.page';

const routes: Routes = [
  {
    path: '',
    component: NegrosO3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NegrosO3PageRoutingModule {}
