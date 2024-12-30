import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SorsogonPageRoutingModule } from './sorsogon-routing.module';

import { SorsogonPage } from './sorsogon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SorsogonPageRoutingModule
  ],
  declarations: [SorsogonPage]
})
export class SorsogonPageModule {}
