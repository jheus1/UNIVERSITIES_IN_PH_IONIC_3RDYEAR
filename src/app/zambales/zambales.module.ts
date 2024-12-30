import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZambalesPageRoutingModule } from './zambales-routing.module';

import { ZambalesPage } from './zambales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZambalesPageRoutingModule
  ],
  declarations: [ZambalesPage]
})
export class ZambalesPageModule {}
