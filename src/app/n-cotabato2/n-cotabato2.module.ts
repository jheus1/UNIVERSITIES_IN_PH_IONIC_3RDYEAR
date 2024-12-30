import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NCotabato2PageRoutingModule } from './n-cotabato2-routing.module';

import { NCotabato2Page } from './n-cotabato2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NCotabato2PageRoutingModule
  ],
  declarations: [NCotabato2Page]
})
export class NCotabato2PageModule {}
