import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Capiz3PageRoutingModule } from './capiz3-routing.module';

import { Capiz3Page } from './capiz3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Capiz3PageRoutingModule
  ],
  declarations: [Capiz3Page]
})
export class Capiz3PageModule {}
