import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamiguinPage } from './camiguin.page';

const routes: Routes = [
  {
    path: '',
    component: CamiguinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamiguinPageRoutingModule {}
