import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NCotabato4PageRoutingModule } from './n-cotabato4-routing.module';

import { NCotabato4Page } from './n-cotabato4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NCotabato4PageRoutingModule
  ],
  declarations: [NCotabato4Page]
})
export class NCotabato4PageModule {}
