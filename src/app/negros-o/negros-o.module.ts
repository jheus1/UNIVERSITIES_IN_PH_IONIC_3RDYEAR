import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NegrosOPageRoutingModule } from './negros-o-routing.module';

import { NegrosOPage } from './negros-o.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NegrosOPageRoutingModule
  ],
  declarations: [NegrosOPage]
})
export class NegrosOPageModule {}
