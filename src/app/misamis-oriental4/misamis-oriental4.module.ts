import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisamisOriental4PageRoutingModule } from './misamis-oriental4-routing.module';

import { MisamisOriental4Page } from './misamis-oriental4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisamisOriental4PageRoutingModule
  ],
  declarations: [MisamisOriental4Page]
})
export class MisamisOriental4PageModule {}
