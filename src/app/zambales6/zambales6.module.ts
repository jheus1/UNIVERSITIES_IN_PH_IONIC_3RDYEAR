import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Zambales6PageRoutingModule } from './zambales6-routing.module';

import { Zambales6Page } from './zambales6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Zambales6PageRoutingModule
  ],
  declarations: [Zambales6Page]
})
export class Zambales6PageModule {}
