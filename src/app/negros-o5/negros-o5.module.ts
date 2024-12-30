import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NegrosO5PageRoutingModule } from './negros-o5-routing.module';

import { NegrosO5Page } from './negros-o5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NegrosO5PageRoutingModule
  ],
  declarations: [NegrosO5Page]
})
export class NegrosO5PageModule {}
