import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasternS8PageRoutingModule } from './eastern-s8-routing.module';

import { EasternS8Page } from './eastern-s8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EasternS8PageRoutingModule
  ],
  declarations: [EasternS8Page]
})
export class EasternS8PageModule {}
