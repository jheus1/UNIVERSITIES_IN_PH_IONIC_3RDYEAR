import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NorthernS6PageRoutingModule } from './northern-s6-routing.module';

import { NorthernS6Page } from './northern-s6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NorthernS6PageRoutingModule
  ],
  declarations: [NorthernS6Page]
})
export class NorthernS6PageModule {}
