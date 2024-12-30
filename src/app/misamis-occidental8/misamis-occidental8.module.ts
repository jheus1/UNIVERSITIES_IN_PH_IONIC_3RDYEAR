import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisamisOccidental8PageRoutingModule } from './misamis-occidental8-routing.module';

import { MisamisOccidental8Page } from './misamis-occidental8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisamisOccidental8PageRoutingModule
  ],
  declarations: [MisamisOccidental8Page]
})
export class MisamisOccidental8PageModule {}
