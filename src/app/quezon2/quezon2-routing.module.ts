import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quezon2Page } from './quezon2.page';

const routes: Routes = [
  {
    path: '',
    component: Quezon2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quezon2PageRoutingModule {}
