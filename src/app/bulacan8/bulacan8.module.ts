import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bulacan8PageRoutingModule } from './bulacan8-routing.module';

import { Bulacan8Page } from './bulacan8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bulacan8PageRoutingModule
  ],
  declarations: [Bulacan8Page]
})
export class Bulacan8PageModule {}
