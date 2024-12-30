import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NCotabato10PageRoutingModule } from './n-cotabato10-routing.module';

import { NCotabato10Page } from './n-cotabato10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NCotabato10PageRoutingModule
  ],
  declarations: [NCotabato10Page]
})
export class NCotabato10PageModule {}
