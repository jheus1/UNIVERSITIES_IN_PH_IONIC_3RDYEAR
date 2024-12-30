import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NCotabato3PageRoutingModule } from './n-cotabato3-routing.module';

import { NCotabato3Page } from './n-cotabato3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NCotabato3PageRoutingModule
  ],
  declarations: [NCotabato3Page]
})
export class NCotabato3PageModule {}
