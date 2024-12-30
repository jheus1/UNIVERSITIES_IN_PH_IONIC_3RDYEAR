import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasternS9PageRoutingModule } from './eastern-s9-routing.module';

import { EasternS9Page } from './eastern-s9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EasternS9PageRoutingModule
  ],
  declarations: [EasternS9Page]
})
export class EasternS9PageModule {}
