import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Biliran2PageRoutingModule } from './biliran2-routing.module';

import { Biliran2Page } from './biliran2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Biliran2PageRoutingModule
  ],
  declarations: [Biliran2Page]
})
export class Biliran2PageModule {}
