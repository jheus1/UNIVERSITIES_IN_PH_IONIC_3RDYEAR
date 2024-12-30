import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Biliran4PageRoutingModule } from './biliran4-routing.module';

import { Biliran4Page } from './biliran4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Biliran4PageRoutingModule
  ],
  declarations: [Biliran4Page]
})
export class Biliran4PageModule {}
