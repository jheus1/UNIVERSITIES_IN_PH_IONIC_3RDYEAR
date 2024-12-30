import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasternS3PageRoutingModule } from './eastern-s3-routing.module';

import { EasternS3Page } from './eastern-s3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EasternS3PageRoutingModule
  ],
  declarations: [EasternS3Page]
})
export class EasternS3PageModule {}
