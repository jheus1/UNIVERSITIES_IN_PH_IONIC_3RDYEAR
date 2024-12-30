import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NegrosO1PageRoutingModule } from './negros-o1-routing.module';

import { NegrosO1Page } from './negros-o1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NegrosO1PageRoutingModule
  ],
  declarations: [NegrosO1Page]
})
export class NegrosO1PageModule {}
