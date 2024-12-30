import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NCotabato9PageRoutingModule } from './n-cotabato9-routing.module';

import { NCotabato9Page } from './n-cotabato9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NCotabato9PageRoutingModule
  ],
  declarations: [NCotabato9Page]
})
export class NCotabato9PageModule {}
