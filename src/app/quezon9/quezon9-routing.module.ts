import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quezon9Page } from './quezon9.page';

const routes: Routes = [
  {
    path: '',
    component: Quezon9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quezon9PageRoutingModule {}
