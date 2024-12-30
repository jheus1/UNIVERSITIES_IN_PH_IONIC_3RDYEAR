import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Capiz10PageRoutingModule } from './capiz10-routing.module';

import { Capiz10Page } from './capiz10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Capiz10PageRoutingModule
  ],
  declarations: [Capiz10Page]
})
export class Capiz10PageModule {}
