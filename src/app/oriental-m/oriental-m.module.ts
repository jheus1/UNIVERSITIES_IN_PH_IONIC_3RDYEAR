import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrientalMPageRoutingModule } from './oriental-m-routing.module';

import { OrientalMPage } from './oriental-m.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrientalMPageRoutingModule
  ],
  declarations: [OrientalMPage]
})
export class OrientalMPageModule {}
