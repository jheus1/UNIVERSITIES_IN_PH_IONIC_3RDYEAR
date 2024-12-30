import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quirino6PageRoutingModule } from './quirino6-routing.module';

import { Quirino6Page } from './quirino6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quirino6PageRoutingModule
  ],
  declarations: [Quirino6Page]
})
export class Quirino6PageModule {}
