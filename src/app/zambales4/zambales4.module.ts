import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Zambales4PageRoutingModule } from './zambales4-routing.module';

import { Zambales4Page } from './zambales4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Zambales4PageRoutingModule
  ],
  declarations: [Zambales4Page]
})
export class Zambales4PageModule {}
