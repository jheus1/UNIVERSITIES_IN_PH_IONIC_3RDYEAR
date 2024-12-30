import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasternS5PageRoutingModule } from './eastern-s5-routing.module';

import { EasternS5Page } from './eastern-s5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EasternS5PageRoutingModule
  ],
  declarations: [EasternS5Page]
})
export class EasternS5PageModule {}
