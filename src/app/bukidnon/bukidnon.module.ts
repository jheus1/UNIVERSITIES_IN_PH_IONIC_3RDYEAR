import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BukidnonPageRoutingModule } from './bukidnon-routing.module';

import { BukidnonPage } from './bukidnon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BukidnonPageRoutingModule
  ],
  declarations: [BukidnonPage]
})
export class BukidnonPageModule {}
