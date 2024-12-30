import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NCotabato6PageRoutingModule } from './n-cotabato6-routing.module';

import { NCotabato6Page } from './n-cotabato6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NCotabato6PageRoutingModule
  ],
  declarations: [NCotabato6Page]
})
export class NCotabato6PageModule {}
