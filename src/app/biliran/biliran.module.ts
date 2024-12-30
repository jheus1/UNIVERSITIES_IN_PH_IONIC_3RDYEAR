import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiliranPageRoutingModule } from './biliran-routing.module';

import { BiliranPage } from './biliran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BiliranPageRoutingModule
  ],
  declarations: [BiliranPage]
})
export class BiliranPageModule {}
