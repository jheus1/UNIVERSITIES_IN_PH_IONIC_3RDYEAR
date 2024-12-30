import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Roblon3PageRoutingModule } from './roblon3-routing.module';

import { Roblon3Page } from './roblon3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Roblon3PageRoutingModule
  ],
  declarations: [Roblon3Page]
})
export class Roblon3PageModule {}
