import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasternS6PageRoutingModule } from './eastern-s6-routing.module';

import { EasternS6Page } from './eastern-s6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EasternS6PageRoutingModule
  ],
  declarations: [EasternS6Page]
})
export class EasternS6PageModule {}
