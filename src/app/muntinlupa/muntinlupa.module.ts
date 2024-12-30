import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuntinlupaPageRoutingModule } from './muntinlupa-routing.module';

import { MuntinlupaPage } from './muntinlupa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuntinlupaPageRoutingModule
  ],
  declarations: [MuntinlupaPage]
})
export class MuntinlupaPageModule {}
