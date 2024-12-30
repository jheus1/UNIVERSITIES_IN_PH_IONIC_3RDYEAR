import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Palawan3PageRoutingModule } from './palawan3-routing.module';

import { Palawan3Page } from './palawan3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Palawan3PageRoutingModule
  ],
  declarations: [Palawan3Page]
})
export class Palawan3PageModule {}
