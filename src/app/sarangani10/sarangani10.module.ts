import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sarangani10PageRoutingModule } from './sarangani10-routing.module';

import { Sarangani10Page } from './sarangani10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sarangani10PageRoutingModule
  ],
  declarations: [Sarangani10Page]
})
export class Sarangani10PageModule {}
