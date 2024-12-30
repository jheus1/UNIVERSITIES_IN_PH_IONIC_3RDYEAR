import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuroraPage } from './aurora.page';

const routes: Routes = [
  {
    path: '',
    component: AuroraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuroraPageRoutingModule {}
