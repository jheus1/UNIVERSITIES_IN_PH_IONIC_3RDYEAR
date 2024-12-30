import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SouthernLPageRoutingModule } from './southern-l-routing.module';

import { SouthernLPage } from './southern-l.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SouthernLPageRoutingModule
  ],
  declarations: [SouthernLPage]
})
export class SouthernLPageModule {}
