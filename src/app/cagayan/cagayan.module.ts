import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CagayanPageRoutingModule } from './cagayan-routing.module';

import { CagayanPage } from './cagayan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CagayanPageRoutingModule
  ],
  declarations: [CagayanPage]
})
export class CagayanPageModule {}
