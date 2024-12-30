import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Roblon1PageRoutingModule } from './roblon1-routing.module';

import { Roblon1Page } from './roblon1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Roblon1PageRoutingModule
  ],
  declarations: [Roblon1Page]
})
export class Roblon1PageModule {}
