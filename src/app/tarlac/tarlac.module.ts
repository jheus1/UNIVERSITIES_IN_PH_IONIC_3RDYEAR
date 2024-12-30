import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarlacPageRoutingModule } from './tarlac-routing.module';

import { TarlacPage } from './tarlac.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarlacPageRoutingModule
  ],
  declarations: [TarlacPage]
})
export class TarlacPageModule {}
