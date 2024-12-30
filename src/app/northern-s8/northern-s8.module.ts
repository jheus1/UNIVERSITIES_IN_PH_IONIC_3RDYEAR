import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NorthernS8PageRoutingModule } from './northern-s8-routing.module';

import { NorthernS8Page } from './northern-s8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NorthernS8PageRoutingModule
  ],
  declarations: [NorthernS8Page]
})
export class NorthernS8PageModule {}
