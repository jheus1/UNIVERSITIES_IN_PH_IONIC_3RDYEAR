import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NegrosO6PageRoutingModule } from './negros-o6-routing.module';

import { NegrosO6Page } from './negros-o6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NegrosO6PageRoutingModule
  ],
  declarations: [NegrosO6Page]
})
export class NegrosO6PageModule {}
