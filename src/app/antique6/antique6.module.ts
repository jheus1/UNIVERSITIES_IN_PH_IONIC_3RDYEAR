import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Antique6PageRoutingModule } from './antique6-routing.module';

import { Antique6Page } from './antique6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Antique6PageRoutingModule
  ],
  declarations: [Antique6Page]
})
export class Antique6PageModule {}
