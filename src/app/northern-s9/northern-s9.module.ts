import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NorthernS9PageRoutingModule } from './northern-s9-routing.module';

import { NorthernS9Page } from './northern-s9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NorthernS9PageRoutingModule
  ],
  declarations: [NorthernS9Page]
})
export class NorthernS9PageModule {}
