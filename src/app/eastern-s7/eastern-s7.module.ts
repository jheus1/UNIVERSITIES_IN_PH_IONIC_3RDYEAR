import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasternS7PageRoutingModule } from './eastern-s7-routing.module';

import { EasternS7Page } from './eastern-s7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EasternS7PageRoutingModule
  ],
  declarations: [EasternS7Page]
})
export class EasternS7PageModule {}
