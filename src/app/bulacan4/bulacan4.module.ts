import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bulacan4PageRoutingModule } from './bulacan4-routing.module';

import { Bulacan4Page } from './bulacan4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bulacan4PageRoutingModule
  ],
  declarations: [Bulacan4Page]
})
export class Bulacan4PageModule {}
