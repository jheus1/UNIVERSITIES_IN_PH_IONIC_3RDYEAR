import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisamisOccidentalPage } from './misamis-occidental.page';

const routes: Routes = [
  {
    path: '',
    component: MisamisOccidentalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisamisOccidentalPageRoutingModule {}
