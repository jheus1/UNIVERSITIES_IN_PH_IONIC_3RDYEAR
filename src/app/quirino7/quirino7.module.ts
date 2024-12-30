import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quirino7PageRoutingModule } from './quirino7-routing.module';

import { Quirino7Page } from './quirino7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quirino7PageRoutingModule
  ],
  declarations: [Quirino7Page]
})
export class Quirino7PageModule {}
