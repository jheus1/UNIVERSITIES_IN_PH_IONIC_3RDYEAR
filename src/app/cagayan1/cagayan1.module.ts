import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cagayan1PageRoutingModule } from './cagayan1-routing.module';

import { Cagayan1Page } from './cagayan1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cagayan1PageRoutingModule
  ],
  declarations: [Cagayan1Page]
})
export class Cagayan1PageModule {}
