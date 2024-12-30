import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaU8PageRoutingModule } from './la-u8-routing.module';

import { LaU8Page } from './la-u8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaU8PageRoutingModule
  ],
  declarations: [LaU8Page]
})
export class LaU8PageModule {}
