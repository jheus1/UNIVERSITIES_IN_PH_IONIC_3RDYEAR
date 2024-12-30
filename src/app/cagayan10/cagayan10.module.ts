import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cagayan10PageRoutingModule } from './cagayan10-routing.module';

import { Cagayan10Page } from './cagayan10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cagayan10PageRoutingModule
  ],
  declarations: [Cagayan10Page]
})
export class Cagayan10PageModule {}
