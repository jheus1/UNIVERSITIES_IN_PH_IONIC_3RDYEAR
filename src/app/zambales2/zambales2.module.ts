import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Zambales2PageRoutingModule } from './zambales2-routing.module';

import { Zambales2Page } from './zambales2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Zambales2PageRoutingModule
  ],
  declarations: [Zambales2Page]
})
export class Zambales2PageModule {}
