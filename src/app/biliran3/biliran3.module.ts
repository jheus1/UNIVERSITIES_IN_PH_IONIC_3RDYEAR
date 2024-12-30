import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Biliran3PageRoutingModule } from './biliran3-routing.module';

import { Biliran3Page } from './biliran3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Biliran3PageRoutingModule
  ],
  declarations: [Biliran3Page]
})
export class Biliran3PageModule {}
