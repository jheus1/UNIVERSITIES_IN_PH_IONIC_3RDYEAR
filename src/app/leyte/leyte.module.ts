import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeytePageRoutingModule } from './leyte-routing.module';

import { LeytePage } from './leyte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeytePageRoutingModule
  ],
  declarations: [LeytePage]
})
export class LeytePageModule {}
