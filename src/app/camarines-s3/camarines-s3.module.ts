import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamarinesS3PageRoutingModule } from './camarines-s3-routing.module';

import { CamarinesS3Page } from './camarines-s3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamarinesS3PageRoutingModule
  ],
  declarations: [CamarinesS3Page]
})
export class CamarinesS3PageModule {}
