import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quirino8PageRoutingModule } from './quirino8-routing.module';

import { Quirino8Page } from './quirino8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quirino8PageRoutingModule
  ],
  declarations: [Quirino8Page]
})
export class Quirino8PageModule {}
