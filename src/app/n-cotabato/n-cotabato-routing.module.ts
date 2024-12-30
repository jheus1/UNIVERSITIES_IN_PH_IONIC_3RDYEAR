import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NCotabatoPage } from './n-cotabato.page';

const routes: Routes = [
  {
    path: '',
    component: NCotabatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NCotabatoPageRoutingModule {}
