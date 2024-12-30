import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NCotabato8PageRoutingModule } from './n-cotabato8-routing.module';

import { NCotabato8Page } from './n-cotabato8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NCotabato8PageRoutingModule
  ],
  declarations: [NCotabato8Page]
})
export class NCotabato8PageModule {}
