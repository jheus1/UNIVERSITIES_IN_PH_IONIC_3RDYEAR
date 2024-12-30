import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Batangas3PageRoutingModule } from './batangas3-routing.module';

import { Batangas3Page } from './batangas3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Batangas3PageRoutingModule
  ],
  declarations: [Batangas3Page]
})
export class Batangas3PageModule {}
