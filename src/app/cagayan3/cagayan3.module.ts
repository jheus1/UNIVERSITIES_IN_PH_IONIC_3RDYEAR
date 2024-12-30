import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cagayan3PageRoutingModule } from './cagayan3-routing.module';

import { Cagayan3Page } from './cagayan3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cagayan3PageRoutingModule
  ],
  declarations: [Cagayan3Page]
})
export class Cagayan3PageModule {}
