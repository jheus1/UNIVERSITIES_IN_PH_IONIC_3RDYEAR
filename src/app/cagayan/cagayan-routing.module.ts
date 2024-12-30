import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CagayanPage } from './cagayan.page';

const routes: Routes = [
  {
    path: '',
    component: CagayanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CagayanPageRoutingModule {}
