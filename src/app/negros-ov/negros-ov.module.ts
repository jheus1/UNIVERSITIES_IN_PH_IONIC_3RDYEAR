import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NegrosOvPageRoutingModule } from './negros-ov-routing.module';

import { NegrosOvPage } from './negros-ov.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NegrosOvPageRoutingModule
  ],
  declarations: [NegrosOvPage]
})
export class NegrosOvPageModule {}
