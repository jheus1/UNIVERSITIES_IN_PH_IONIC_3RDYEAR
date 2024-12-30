import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NorthernSPageRoutingModule } from './northern-s-routing.module';

import { NorthernSPage } from './northern-s.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NorthernSPageRoutingModule
  ],
  declarations: [NorthernSPage]
})
export class NorthernSPageModule {}
