import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Marinduque2PageRoutingModule } from './marinduque2-routing.module';

import { Marinduque2Page } from './marinduque2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Marinduque2PageRoutingModule
  ],
  declarations: [Marinduque2Page]
})
export class Marinduque2PageModule {}
