import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NorthernS7PageRoutingModule } from './northern-s7-routing.module';

import { NorthernS7Page } from './northern-s7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NorthernS7PageRoutingModule
  ],
  declarations: [NorthernS7Page]
})
export class NorthernS7PageModule {}
