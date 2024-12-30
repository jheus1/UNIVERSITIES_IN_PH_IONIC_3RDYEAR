import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NorthernS3PageRoutingModule } from './northern-s3-routing.module';

import { NorthernS3Page } from './northern-s3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NorthernS3PageRoutingModule
  ],
  declarations: [NorthernS3Page]
})
export class NorthernS3PageModule {}
