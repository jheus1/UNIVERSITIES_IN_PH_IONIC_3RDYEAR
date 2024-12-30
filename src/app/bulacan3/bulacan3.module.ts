import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bulacan3PageRoutingModule } from './bulacan3-routing.module';

import { Bulacan3Page } from './bulacan3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bulacan3PageRoutingModule
  ],
  declarations: [Bulacan3Page]
})
export class Bulacan3PageModule {}
