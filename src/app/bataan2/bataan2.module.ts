import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bataan2PageRoutingModule } from './bataan2-routing.module';

import { Bataan2Page } from './bataan2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bataan2PageRoutingModule
  ],
  declarations: [Bataan2Page]
})
export class Bataan2PageModule {}
