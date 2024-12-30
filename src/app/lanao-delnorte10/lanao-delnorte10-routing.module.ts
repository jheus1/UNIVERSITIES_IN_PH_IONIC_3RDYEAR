import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanaoDelnorte10Page } from './lanao-delnorte10.page';

const routes: Routes = [
  {
    path: '',
    component: LanaoDelnorte10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanaoDelnorte10PageRoutingModule {}
