import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Palawan1PageRoutingModule } from './palawan1-routing.module';

import { Palawan1Page } from './palawan1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Palawan1PageRoutingModule
  ],
  declarations: [Palawan1Page]
})
export class Palawan1PageModule {}
