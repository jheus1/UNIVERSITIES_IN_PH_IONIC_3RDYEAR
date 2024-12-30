import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bulacan10PageRoutingModule } from './bulacan10-routing.module';

import { Bulacan10Page } from './bulacan10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bulacan10PageRoutingModule
  ],
  declarations: [Bulacan10Page]
})
export class Bulacan10PageModule {}
