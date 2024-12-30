import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Biliran7PageRoutingModule } from './biliran7-routing.module';

import { Biliran7Page } from './biliran7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Biliran7PageRoutingModule
  ],
  declarations: [Biliran7Page]
})
export class Biliran7PageModule {}
