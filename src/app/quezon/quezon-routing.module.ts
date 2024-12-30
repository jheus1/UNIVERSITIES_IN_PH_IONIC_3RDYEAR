import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuezonPage } from './quezon.page';

const routes: Routes = [
  {
    path: '',
    component: QuezonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuezonPageRoutingModule {}
