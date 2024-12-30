import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NorthernS10PageRoutingModule } from './northern-s10-routing.module';

import { NorthernS10Page } from './northern-s10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NorthernS10PageRoutingModule
  ],
  declarations: [NorthernS10Page]
})
export class NorthernS10PageModule {}
