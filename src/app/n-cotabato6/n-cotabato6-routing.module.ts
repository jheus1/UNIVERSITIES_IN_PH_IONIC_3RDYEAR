import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NCotabato6Page } from './n-cotabato6.page';

const routes: Routes = [
  {
    path: '',
    component: NCotabato6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NCotabato6PageRoutingModule {}
