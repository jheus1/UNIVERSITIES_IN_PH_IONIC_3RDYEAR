import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NegrosO7PageRoutingModule } from './negros-o7-routing.module';

import { NegrosO7Page } from './negros-o7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NegrosO7PageRoutingModule
  ],
  declarations: [NegrosO7Page]
})
export class NegrosO7PageModule {}
