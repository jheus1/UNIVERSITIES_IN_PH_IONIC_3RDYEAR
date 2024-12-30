import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamarinesSPage } from './camarines-s.page';

const routes: Routes = [
  {
    path: '',
    component: CamarinesSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamarinesSPageRoutingModule {}
