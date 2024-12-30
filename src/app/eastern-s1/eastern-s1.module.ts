import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasternS1PageRoutingModule } from './eastern-s1-routing.module';

import { EasternS1Page } from './eastern-s1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EasternS1PageRoutingModule
  ],
  declarations: [EasternS1Page]
})
export class EasternS1PageModule {}
