import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Capiz9PageRoutingModule } from './capiz9-routing.module';

import { Capiz9Page } from './capiz9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Capiz9PageRoutingModule
  ],
  declarations: [Capiz9Page]
})
export class Capiz9PageModule {}
