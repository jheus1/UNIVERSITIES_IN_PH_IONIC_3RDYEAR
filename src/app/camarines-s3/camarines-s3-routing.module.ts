import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamarinesS3Page } from './camarines-s3.page';

const routes: Routes = [
  {
    path: '',
    component: CamarinesS3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamarinesS3PageRoutingModule {}
