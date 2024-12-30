import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NorthernS1PageRoutingModule } from './northern-s1-routing.module';

import { NorthernS1Page } from './northern-s1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NorthernS1PageRoutingModule
  ],
  declarations: [NorthernS1Page]
})
export class NorthernS1PageModule {}
