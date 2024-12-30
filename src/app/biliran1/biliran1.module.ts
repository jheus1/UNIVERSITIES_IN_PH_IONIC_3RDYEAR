import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Biliran1PageRoutingModule } from './biliran1-routing.module';

import { Biliran1Page } from './biliran1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Biliran1PageRoutingModule
  ],
  declarations: [Biliran1Page]
})
export class Biliran1PageModule {}
