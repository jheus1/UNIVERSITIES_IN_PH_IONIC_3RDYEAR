import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NCotabato1PageRoutingModule } from './n-cotabato1-routing.module';

import { NCotabato1Page } from './n-cotabato1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NCotabato1PageRoutingModule
  ],
  declarations: [NCotabato1Page]
})
export class NCotabato1PageModule {}
