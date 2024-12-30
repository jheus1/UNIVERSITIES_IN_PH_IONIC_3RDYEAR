import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NegrosO8PageRoutingModule } from './negros-o8-routing.module';

import { NegrosO8Page } from './negros-o8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NegrosO8PageRoutingModule
  ],
  declarations: [NegrosO8Page]
})
export class NegrosO8PageModule {}
