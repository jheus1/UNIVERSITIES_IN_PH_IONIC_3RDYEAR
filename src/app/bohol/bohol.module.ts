import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoholPageRoutingModule } from './bohol-routing.module';

import { BoholPage } from './bohol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoholPageRoutingModule
  ],
  declarations: [BoholPage]
})
export class BoholPageModule {}
