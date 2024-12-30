import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisamisOriental2PageRoutingModule } from './misamis-oriental2-routing.module';

import { MisamisOriental2Page } from './misamis-oriental2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisamisOriental2PageRoutingModule
  ],
  declarations: [MisamisOriental2Page]
})
export class MisamisOriental2PageModule {}
