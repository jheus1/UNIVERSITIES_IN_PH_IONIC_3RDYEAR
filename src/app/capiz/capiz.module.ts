import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapizPageRoutingModule } from './capiz-routing.module';

import { CapizPage } from './capiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapizPageRoutingModule
  ],
  declarations: [CapizPage]
})
export class CapizPageModule {}
