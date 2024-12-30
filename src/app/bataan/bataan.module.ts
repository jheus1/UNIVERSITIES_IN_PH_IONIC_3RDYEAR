import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BataanPageRoutingModule } from './bataan-routing.module';

import { BataanPage } from './bataan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BataanPageRoutingModule
  ],
  declarations: [BataanPage]
})
export class BataanPageModule {}
