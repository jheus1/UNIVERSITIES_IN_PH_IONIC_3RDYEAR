import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuirinoPageRoutingModule } from './quirino-routing.module';

import { QuirinoPage } from './quirino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuirinoPageRoutingModule
  ],
  declarations: [QuirinoPage]
})
export class QuirinoPageModule {}
