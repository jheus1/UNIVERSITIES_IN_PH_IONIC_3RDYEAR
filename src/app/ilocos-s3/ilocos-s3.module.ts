import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlocosS3PageRoutingModule } from './ilocos-s3-routing.module';

import { IlocosS3Page } from './ilocos-s3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlocosS3PageRoutingModule
  ],
  declarations: [IlocosS3Page]
})
export class IlocosS3PageModule {}
