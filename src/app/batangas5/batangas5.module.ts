import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Batangas5PageRoutingModule } from './batangas5-routing.module';

import { Batangas5Page } from './batangas5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Batangas5PageRoutingModule
  ],
  declarations: [Batangas5Page]
})
export class Batangas5PageModule {}
