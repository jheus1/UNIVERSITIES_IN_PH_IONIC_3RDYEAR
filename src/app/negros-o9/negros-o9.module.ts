import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NegrosO9PageRoutingModule } from './negros-o9-routing.module';

import { NegrosO9Page } from './negros-o9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NegrosO9PageRoutingModule
  ],
  declarations: [NegrosO9Page]
})
export class NegrosO9PageModule {}
