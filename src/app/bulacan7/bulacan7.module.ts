import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bulacan7PageRoutingModule } from './bulacan7-routing.module';

import { Bulacan7Page } from './bulacan7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bulacan7PageRoutingModule
  ],
  declarations: [Bulacan7Page]
})
export class Bulacan7PageModule {}
