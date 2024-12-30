import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuroraPageRoutingModule } from './aurora-routing.module';

import { AuroraPage } from './aurora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuroraPageRoutingModule
  ],
  declarations: [AuroraPage]
})
export class AuroraPageModule {}
