import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasternS10PageRoutingModule } from './eastern-s10-routing.module';

import { EasternS10Page } from './eastern-s10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EasternS10PageRoutingModule
  ],
  declarations: [EasternS10Page]
})
export class EasternS10PageModule {}
