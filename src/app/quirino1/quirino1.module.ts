import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quirino1PageRoutingModule } from './quirino1-routing.module';

import { Quirino1Page } from './quirino1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quirino1PageRoutingModule
  ],
  declarations: [Quirino1Page]
})
export class Quirino1PageModule {}
