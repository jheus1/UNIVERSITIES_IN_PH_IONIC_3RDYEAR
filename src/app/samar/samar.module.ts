import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamarPageRoutingModule } from './samar-routing.module';

import { SamarPage } from './samar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamarPageRoutingModule
  ],
  declarations: [SamarPage]
})
export class SamarPageModule {}
