import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Capiz1PageRoutingModule } from './capiz1-routing.module';

import { Capiz1Page } from './capiz1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Capiz1PageRoutingModule
  ],
  declarations: [Capiz1Page]
})
export class Capiz1PageModule {}
