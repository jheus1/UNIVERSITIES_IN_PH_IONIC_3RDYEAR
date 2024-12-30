import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlocosS3Page } from './ilocos-s3.page';

const routes: Routes = [
  {
    path: '',
    component: IlocosS3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlocosS3PageRoutingModule {}
