import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisamisOccidental7PageRoutingModule } from './misamis-occidental7-routing.module';

import { MisamisOccidental7Page } from './misamis-occidental7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisamisOccidental7PageRoutingModule
  ],
  declarations: [MisamisOccidental7Page]
})
export class MisamisOccidental7PageModule {}
