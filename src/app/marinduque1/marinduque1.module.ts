import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Marinduque1PageRoutingModule } from './marinduque1-routing.module';

import { Marinduque1Page } from './marinduque1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Marinduque1PageRoutingModule
  ],
  declarations: [Marinduque1Page]
})
export class Marinduque1PageModule {}
