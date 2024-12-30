import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Capiz7PageRoutingModule } from './capiz7-routing.module';

import { Capiz7Page } from './capiz7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Capiz7PageRoutingModule
  ],
  declarations: [Capiz7Page]
})
export class Capiz7PageModule {}
