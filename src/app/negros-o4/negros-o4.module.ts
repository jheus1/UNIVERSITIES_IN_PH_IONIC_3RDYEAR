import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NegrosO4PageRoutingModule } from './negros-o4-routing.module';

import { NegrosO4Page } from './negros-o4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NegrosO4PageRoutingModule
  ],
  declarations: [NegrosO4Page]
})
export class NegrosO4PageModule {}
