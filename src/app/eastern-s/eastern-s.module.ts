import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasternSPageRoutingModule } from './eastern-s-routing.module';

import { EasternSPage } from './eastern-s.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EasternSPageRoutingModule
  ],
  declarations: [EasternSPage]
})
export class EasternSPageModule {}
