import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisamisOriental10PageRoutingModule } from './misamis-oriental10-routing.module';

import { MisamisOriental10Page } from './misamis-oriental10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisamisOriental10PageRoutingModule
  ],
  declarations: [MisamisOriental10Page]
})
export class MisamisOriental10PageModule {}
