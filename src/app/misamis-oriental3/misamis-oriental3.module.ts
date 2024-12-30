import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisamisOriental3PageRoutingModule } from './misamis-oriental3-routing.module';

import { MisamisOriental3Page } from './misamis-oriental3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisamisOriental3PageRoutingModule
  ],
  declarations: [MisamisOriental3Page]
})
export class MisamisOriental3PageModule {}
