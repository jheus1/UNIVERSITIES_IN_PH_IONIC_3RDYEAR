import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasternS3Page } from './eastern-s3.page';

const routes: Routes = [
  {
    path: '',
    component: EasternS3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasternS3PageRoutingModule {}
