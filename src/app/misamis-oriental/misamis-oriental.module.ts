import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisamisOrientalPageRoutingModule } from './misamis-oriental-routing.module';

import { MisamisOrientalPage } from './misamis-oriental.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisamisOrientalPageRoutingModule
  ],
  declarations: [MisamisOrientalPage]
})
export class MisamisOrientalPageModule {}
